// ========================================
// 🗃️ FIREBASE FIRESTORE OPERATIONS
// ========================================

import { db } from './config.js';
import { getCurrentUser, isSignedIn } from './auth.js';
import { 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    collection,
    addDoc,
    query,
    where,
    orderBy,
    limit,
    getDocs,
    serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

console.log('🗃️ Firestore module loaded');

// ========================================
// 👤 USER PROFILE OPERATIONS
// ========================================

/**
 * Create or update user profile
 */
export async function saveUserProfile(userData) {
    if (!isSignedIn()) return { success: false, error: 'Not signed in' };
    
    try {
        const user = getCurrentUser();
        const userRef = doc(db, 'users', user.uid);
        
        const profileData = {
            email: user.email,
            displayName: user.displayName || userData.displayName || 'Usuario',
            avatar: userData.avatar || '🧠',
            institution: userData.institution || '',
            createdAt: serverTimestamp(),
            lastActiveAt: serverTimestamp(),
            preferences: {
                theme: userData.theme || 'dark',
                notifications: userData.notifications !== false
            },
            ...userData
        };
        
        await setDoc(userRef, profileData, { merge: true });
        console.log('✅ User profile saved');
        
        return { success: true, data: profileData };
    } catch (error) {
        console.error('❌ Error saving user profile:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Get user profile
 */
export async function getUserProfile() {
    if (!isSignedIn()) return null;
    
    try {
        const user = getCurrentUser();
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);
        
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('👤 No user profile found, creating default...');
            return await saveUserProfile({});
        }
    } catch (error) {
        console.error('❌ Error getting user profile:', error);
        return null;
    }
}

// ========================================
// 📊 PROGRESS OPERATIONS
// ========================================

/**
 * Save theme progress
 */
export async function saveThemeProgress(themeId, progressData) {
    if (!isSignedIn()) return { success: false, error: 'Not signed in' };
    
    try {
        const user = getCurrentUser();
        const progressRef = doc(db, 'userProgress', `${user.uid}_${themeId}`);
        
        const data = {
            userId: user.uid,
            themeId: themeId,
            attempts: progressData.attempts || 1,
            bestScore: progressData.bestScore || 0,
            lastScore: progressData.lastScore || 0,
            totalTime: progressData.totalTime || 0,
            completed: progressData.completed || false,
            questionsWrong: progressData.questionsWrong || [],
            lastAttemptAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };
        
        await setDoc(progressRef, data, { merge: true });
        console.log(`✅ Progress saved for theme: ${themeId}`);
        
        return { success: true, data };
    } catch (error) {
        console.error('❌ Error saving progress:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Get theme progress
 */
export async function getThemeProgress(themeId) {
    if (!isSignedIn()) return null;
    
    try {
        const user = getCurrentUser();
        const progressRef = doc(db, 'userProgress', `${user.uid}_${themeId}`);
        const docSnap = await getDoc(progressRef);
        
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
        console.error('❌ Error getting theme progress:', error);
        return null;
    }
}

/**
 * Get all user progress
 */
export async function getAllUserProgress() {
    if (!isSignedIn()) return {};
    
    try {
        const user = getCurrentUser();
        const progressQuery = query(
            collection(db, 'userProgress'),
            where('userId', '==', user.uid),
            orderBy('lastAttemptAt', 'desc')
        );
        
        const querySnapshot = await getDocs(progressQuery);
        const progress = {};
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            progress[data.themeId] = data;
        });
        
        console.log(`✅ Loaded progress for ${Object.keys(progress).length} themes`);
        return progress;
    } catch (error) {
        console.error('❌ Error getting all progress:', error);
        return {};
    }
}

// ========================================
// 📝 SESSION TRACKING
// ========================================

/**
 * Save quiz session details
 */
export async function saveQuizSession(sessionData) {
    if (!isSignedIn()) return { success: false, error: 'Not signed in' };
    
    try {
        const user = getCurrentUser();
        const sessionRef = collection(db, 'userSessions');
        
        const data = {
            userId: user.uid,
            themeId: sessionData.themeId,
            score: sessionData.score,
            percentage: Math.round((sessionData.score / sessionData.totalQuestions) * 100),
            timeSpent: sessionData.timeSpent,
            totalQuestions: sessionData.totalQuestions,
            answersDetails: sessionData.answersDetails || [],
            completedAt: serverTimestamp(),
            userAgent: navigator.userAgent,
            timestamp: Date.now()
        };
        
        await addDoc(sessionRef, data);
        console.log(`✅ Quiz session saved for theme: ${sessionData.themeId}`);
        
        return { success: true, data };
    } catch (error) {
        console.error('❌ Error saving quiz session:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Get user's recent sessions
 */
export async function getRecentSessions(limitCount = 10) {
    if (!isSignedIn()) return [];
    
    try {
        const user = getCurrentUser();
        const sessionsQuery = query(
            collection(db, 'userSessions'),
            where('userId', '==', user.uid),
            orderBy('completedAt', 'desc'),
            limit(limitCount)
        );
        
        const querySnapshot = await getDocs(sessionsQuery);
        const sessions = [];
        
        querySnapshot.forEach((doc) => {
            sessions.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        return sessions;
    } catch (error) {
        console.error('❌ Error getting recent sessions:', error);
        return [];
    }
}

// ========================================
// 🔄 LOCALSTORAGE SYNC
// ========================================

/**
 * Migrate localStorage progress to Firebase
 */
export async function migrateLocalStorageProgress() {
    if (!isSignedIn()) return { success: false, error: 'Not signed in' };
    
    try {
        const localProgress = JSON.parse(localStorage.getItem('filosofia-quiz-progress') || '{}');
        
        if (!localProgress.completedThemes) {
            console.log('📱 No local progress to migrate');
            return { success: true, migrated: 0 };
        }
        
        let migratedCount = 0;
        
        for (const [themeId, themeData] of Object.entries(localProgress.completedThemes)) {
            await saveThemeProgress(themeId, {
                attempts: themeData.attempts || 1,
                bestScore: themeData.bestScore || themeData.score || 0,
                lastScore: themeData.score || 0,
                totalTime: themeData.timeSpent || 0,
                completed: (themeData.score || 0) >= 50,
                questionsWrong: []
            });
            
            migratedCount++;
        }
        
        console.log(`✅ Migrated ${migratedCount} themes from localStorage`);
        return { success: true, migrated: migratedCount };
    } catch (error) {
        console.error('❌ Error migrating localStorage:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Sync Firebase progress to localStorage (offline backup)
 */
export async function syncToLocalStorage() {
    try {
        const firebaseProgress = await getAllUserProgress();
        const localProgress = JSON.parse(localStorage.getItem('filosofia-quiz-progress') || '{}');
        
        // Convert Firebase format to localStorage format
        const convertedProgress = {};
        for (const [themeId, data] of Object.entries(firebaseProgress)) {
            convertedProgress[themeId] = {
                score: data.bestScore,
                bestScore: data.bestScore,
                attempts: data.attempts,
                timeSpent: data.totalTime,
                lastAttempt: data.lastAttemptAt?.toDate?.()?.toISOString() || new Date().toISOString()
            };
        }
        
        const updatedProgress = {
            ...localProgress,
            completedThemes: convertedProgress,
            lastSync: new Date().toISOString()
        };
        
        localStorage.setItem('filosofia-quiz-progress', JSON.stringify(updatedProgress));
        console.log('✅ Progress synced to localStorage');
        
    } catch (error) {
        console.error('❌ Error syncing to localStorage:', error);
    }
}

// ========================================
// 📊 ANALYTICS HELPERS
// ========================================

/**
 * Update user's last activity
 */
export async function updateLastActivity() {
    if (!isSignedIn()) return;
    
    try {
        const user = getCurrentUser();
        const userRef = doc(db, 'users', user.uid);
        
        await updateDoc(userRef, {
            lastActiveAt: serverTimestamp()
        });
        
    } catch (error) {
        console.error('❌ Error updating last activity:', error);
    }
}

// Auto-update activity every 5 minutes
setInterval(updateLastActivity, 5 * 60 * 1000);