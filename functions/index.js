/**
 * ═══════════════════════════════════════════════════════════════
 * 🔥 FIREBASE CLOUD FUNCTION V5 - DIÁLOGOS FILOSÓFICOS
 * ═══════════════════════════════════════════════════════════════
 * 
 * Función segura que actúa como intermediario entre el frontend
 * y la API de OpenRouter para mantener la API key privada.
 * 
 * Deploy:
 *   firebase deploy --only functions
 * 
 * Endpoints:
 *   chatFilosofo(data) - Envía mensaje y recibe respuesta del filósofo
 */

const {onCall, HttpsError} = require("firebase-functions/v2/https");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// ═══════════════════════════════════════════════════════════════
// 📚 PROMPTS DE SISTEMA POR FILÓSOFO
// ═══════════════════════════════════════════════════════════════

const PROMPTS_SISTEMA = {
  aristoteles: `Eres Aristóteles, el filósofo griego maestro de la ética de la virtud. Tu misión es guiar al estudiante a través del método dialógico moderado para que descubra por sí mismo conceptos como:
- La virtud como término medio entre dos extremos viciosos
- La eudaimonía (felicidad plena) como fin último
- La prudencia (frónesis) como virtud intelectual clave
- El papel de los hábitos en la formación del carácter virtuoso

REGLAS ESTRICTAS:
1. Responde SIEMPRE en 2-4 oraciones máximo (50-80 palabras)
2. Usa preguntas reflexivas que guíen su razonamiento
3. Conecta sus respuestas con ejemplos prácticos de virtudes
4. Cuando detectes contradicciones, señálalas con tacto
5. Usa un tono moderado, sabio y pedagógico
6. Incluye ocasionalmente términos griegos (eudaimonía, frónesis, arete)
7. No des respuestas directas, guía con preguntas socráticas`,

  socrates: `Eres Sócrates, el padre de la filosofía occidental. Tu método es la mayéutica: hacer preguntas que guíen al estudiante a descubrir la verdad por sí mismo.

REGLAS:
1. SIEMPRE responde con preguntas, nunca des respuestas directas
2. Cuando detectes contradicciones, señálalas con nuevas preguntas
3. Usa ironía socrática con tacto
4. Máximo 3-4 preguntas por respuesta (50-80 palabras)
5. Mantén tono humilde pero incisivo`,

  kant: `Eres Immanuel Kant, filósofo del imperativo categórico y la razón práctica. Guía al estudiante hacia el pensamiento deontológico.

REGLAS:
1. Enfócate en el deber, la intención y la universalidad
2. Pregunta: "¿Podrías querer que esa máxima sea ley universal?"
3. Distingue entre imperativos hipotéticos y categóricos
4. Tono riguroso pero pedagógico
5. Máximo 3-4 oraciones por respuesta (50-80 palabras)`,
};

// ═══════════════════════════════════════════════════════════════
// 🛡️ VALIDACIONES
// ═══════════════════════════════════════════════════════════════

function validarDatos(data) {
  const errores = [];

  // Validar filósofo
  if (!data.filosofo) {
    errores.push("Campo 'filosofo' requerido");
  } else if (!PROMPTS_SISTEMA[data.filosofo]) {
    errores.push(`Filósofo '${data.filosofo}' no disponible`);
  }

  // Validar mensaje
  if (!data.mensaje) {
    errores.push("Campo 'mensaje' requerido");
  } else if (typeof data.mensaje !== "string") {
    errores.push("El mensaje debe ser texto");
  } else if (data.mensaje.trim().length < 10) {
    errores.push("Mensaje muy corto (mínimo 10 caracteres)");
  } else if (data.mensaje.length > 1000) {
    errores.push("Mensaje muy largo (máximo 1000 caracteres)");
  }

  // Validar historial
  if (data.historial && !Array.isArray(data.historial)) {
    errores.push("El historial debe ser un array");
  }

  return errores;
}

// ═══════════════════════════════════════════════════════════════
// 🚀 CLOUD FUNCTION PRINCIPAL
// ═══════════════════════════════════════════════════════════════
exports.chatFilosofo = onCall(
    {
      region: "southamerica-east1", // ← Verificar que esté
      cors: true,                   // ← Verificar que esté
    },
    async (request) => {
// exports.chatFilosofo = onCall(
//     {
//       region: "southamerica-east1", // Región más cercana a Argentina
//       cors: true,
//     },
    // async (request) => {
      const inicioTiempo = Date.now();
      const data = request.data;
      const auth = request.auth;

      logger.info("═══════════════════════════════════════════════════");
      logger.info("📨 Nueva petición de chat recibida");
      logger.info(`🎭 Filósofo: ${data.filosofo || "N/A"}`);
      logger.info(`👤 Usuario: ${auth?.uid || "anónimo"}`);

      try {
        // ============================================
        // 1. VERIFICAR AUTENTICACIÓN
        // ============================================
        if (!auth) {
          logger.warn("⚠️ Intento de acceso sin autenticación");
          throw new HttpsError(
              "unauthenticated",
              "Debes estar autenticado para usar esta función"
          );
        }

        // ============================================
        // 2. VALIDAR DATOS DE ENTRADA
        // ============================================
        const errores = validarDatos(data);
        if (errores.length > 0) {
          logger.warn(`⚠️ Errores de validación: ${errores.join(", ")}`);
          throw new HttpsError(
              "invalid-argument",
              `Datos inválidos: ${errores.join(", ")}`
          );
        }

        // ============================================
        // 3. OBTENER API KEY (desde variable de entorno)
        // ============================================
        const apiKey = process.env.OPENROUTER_KEY;

        if (!apiKey) {
          logger.error("❌ API key de OpenRouter no configurada");
          logger.error("   Crea un archivo functions/.env con: OPENROUTER_KEY=tu-key");
          throw new HttpsError(
              "internal",
              "Configuración del servidor incompleta"
          );
        }

        // ============================================
        // 4. CONSTRUIR MENSAJES PARA LA API
        // ============================================
        const mensajesApi = [
          {
            role: "system",
            content: PROMPTS_SISTEMA[data.filosofo],
          },
          ...(data.historial || []),
          {
            role: "user",
            content: data.mensaje,
          },
        ];

        logger.info(`📚 Historial: ${data.historial?.length || 0} mensajes`);

        // ============================================
        // 5. LLAMAR A OPENROUTER API
        // ============================================
        logger.info("🤖 Llamando a OpenRouter API...");
        const tiempoApiInicio = Date.now();

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://filosofia-quiz-prod.web.app",
                "X-Title": "Diálogos Filosóficos - Prueba Filo",
              },
              body: JSON.stringify({
                model: "anthropic/claude-3-haiku",
                messages: mensajesApi,
                max_tokens: 150,
                temperature: 0.7,
              }),
            }
        );

        const tiempoApi = Date.now() - tiempoApiInicio;
        logger.info(`⏱️ API respondió en ${tiempoApi}ms`);

        // ============================================
        // 6. VERIFICAR RESPUESTA
        // ============================================
        if (!response.ok) {
          const errorText = await response.text();
          logger.error(`❌ Error API: ${response.status} - ${errorText}`);

          throw new HttpsError(
              "internal",
              `Error en API de IA: ${response.status}`
          );
        }

        // ============================================
        // 7. PARSEAR Y RETORNAR RESPUESTA
        // ============================================
        const dataRespuesta = await response.json();
        const respuestaTexto = dataRespuesta.choices[0].message.content;
        const tokensUsados = dataRespuesta.usage?.total_tokens || 0;

        const tiempoTotal = Date.now() - inicioTiempo;

        logger.info("✅ Respuesta exitosa");
        logger.info(`📊 Tokens: ${tokensUsados}, Tiempo total: ${tiempoTotal}ms`);
        logger.info("═══════════════════════════════════════════════════");

        return {
          respuesta: respuestaTexto,
          timestamp: new Date().toISOString(),
          tokensUsados: tokensUsados,
          tiempoRespuestaMs: tiempoApi,
          tiempoTotalMs: tiempoTotal,
          filosofo: data.filosofo,
        };
      } catch (error) {
        logger.error("❌ Error procesando petición:", error);
        logger.error("═══════════════════════════════════════════════════");

        // Si ya es un HttpsError, re-lanzarlo
        if (error instanceof HttpsError) {
          throw error;
        }

        // Error genérico
        throw new HttpsError(
            "internal",
            "Error inesperado en el servidor",
            error.message
        );
      }
    }
);

// ═══════════════════════════════════════════════════════════════
// 🔧 FUNCIÓN DE HEALTH CHECK (OPCIONAL)
// ═══════════════════════════════════════════════════════════════

exports.healthCheck = onRequest((req, res) => {
  const apiKeyConfigurada = !!process.env.OPENROUTER_KEY;

  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    apiKeyConfigurada: apiKeyConfigurada,
    region: "southamerica-east1",
  });
});