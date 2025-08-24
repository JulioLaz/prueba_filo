// ========================================
// 🔐 FIREBASE AUTHENTICATION
// ========================================

import { auth } from './config.js';
import { 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged,
    signInAnonymously 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

console.log('🔐 Auth module loaded');

// ========================================
// 🌍 GLOBAL STATE
// ========================================

let currentUser = null;
let authListeners = [];

// ========================================
// 🔑 AUTHENTICATION METHODS
// ========================================

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
    try {
        console.log('🔑 Attempting Google sign in...');
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        
        console.log('✅ Google sign in successful:', result.user.email);
        return {
            success: true,
            user: result.user
        };
    } catch (error) {
        console.error('❌ Google sign in failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Sign in anonymously (for users who want to try without account)
 */
export async function signInAnonymously() {
    try {
        console.log('👤 Signing in anonymously...');
        const result = await signInAnonymously(auth);
        
        console.log('✅ Anonymous sign in successful');
        return {
            success: true,
            user: result.user
        };
    } catch (error) {
        console.error('❌ Anonymous sign in failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Sign out current user
 */
export async function logOut() {
    try {
        console.log('🚪 Signing out...');
        await signOut(auth);
        currentUser = null;
        console.log('✅ Sign out successful');
        return { success: true };
    } catch (error) {
        console.error('❌ Sign out failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Get current user
 */
export function getCurrentUser() {
    return currentUser;
}

/**
 * Check if user is signed in
 */
export function isSignedIn() {
    return currentUser !== null;
}

/**
 * Check if user is anonymous
 */
export function isAnonymous() {
    return currentUser?.isAnonymous || false;
}

// ========================================
// 📡 AUTH STATE MANAGEMENT
// ========================================

/**
 * Add listener for auth state changes
 */
export function addAuthListener(callback) {
    authListeners.push(callback);
}

/**
 * Remove auth listener
 */
export function removeAuthListener(callback) {
    const index = authListeners.indexOf(callback);
    if (index > -1) {
        authListeners.splice(index, 1);
    }
}

/**
 * Initialize auth state listener
 */
export function initializeAuth() {
    console.log('🎧 Setting up auth state listener...');
    
    onAuthStateChanged(auth, (user) => {
        console.log('🔄 Auth state changed:', user ? user.email || 'Anonymous' : 'Signed out');
        
        currentUser = user;
        
        // Notify all listeners
        authListeners.forEach(callback => {
            try {
                callback(user);
            } catch (error) {
                console.error('❌ Auth listener error:', error);
            }
        });
    });
}

// ========================================
// 👤 USER INFO HELPERS
// ========================================

/**
 * Get user display info
 */
export function getUserInfo() {
    if (!currentUser) return null;
    
    return {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName || 'Usuario',
        photoURL: currentUser.photoURL,
        isAnonymous: currentUser.isAnonymous,
        creationTime: currentUser.metadata.creationTime,
        lastSignInTime: currentUser.metadata.lastSignInTime
    };
}

/**
 * Get user avatar (photo or emoji fallback)
 */
export function getUserAvatar() {
    if (!currentUser) return '👤';
    
    if (currentUser.photoURL) {
        return currentUser.photoURL;
    }
    
    if (currentUser.isAnonymous) {
        return '👻';
    }
    
    // Generate emoji based on first letter of name/email
    const name = currentUser.displayName || currentUser.email || '';
    const firstLetter = name.charAt(0).toLowerCase();
    const emojiIndex = firstLetter.charCodeAt(0) % 8;
    const emojis = ['🧠', '🎓', '📚', '🤔', '💡', '🌟', '🚀', '🎯'];
    
    return emojis[emojiIndex];
}

// Initialize auth when module loads
initializeAuth();