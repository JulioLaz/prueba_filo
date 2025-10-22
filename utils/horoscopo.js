/**
 * ═══════════════════════════════════════════════════════════════
 * 🔮 UTILIDADES DE HORÓSCOPO Y ZODÍACO
 * ═══════════════════════════════════════════════════════════════
 * 
 * Calcula el signo zodiacal desde una fecha de nacimiento
 * y retorna emojis temáticos para el horóscopo.
 * 
 * Uso:
 *   import { obtenerZodiaco, obtenerEmojisZodiaco } from './horoscopo.js';
 *   
 *   const signo = obtenerZodiaco('2007-07-06'); // "Leo"
 *   const emojis = obtenerEmojisZodiaco('Leo');  // { principal: "♌", secundarios: ["☀️", "🦁", "👑"] }
 */

// ═══════════════════════════════════════════════════════════════
// 📅 DEFINICIÓN DE ZODÍACOS CON RANGOS DE FECHAS
// ═══════════════════════════════════════════════════════════════

const ZODIACO_DATA = {
  "Aries": {
    emoji_principal: "♈",
    emojis_secundarios: ["🔥", "🐏", "💪"],
    fecha_inicio_mes: 3,
    fecha_inicio_dia: 21,
    fecha_fin_mes: 4,
    fecha_fin_dia: 19
  },
  "Tauro": {
    emoji_principal: "♉",
    emojis_secundarios: ["🌿", "🐂", "💎"],
    fecha_inicio_mes: 4,
    fecha_inicio_dia: 20,
    fecha_fin_mes: 5,
    fecha_fin_dia: 20
  },
  "Géminis": {
    emoji_principal: "♊",
    emojis_secundarios: ["💨", "👯", "🧠"],
    fecha_inicio_mes: 5,
    fecha_inicio_dia: 21,
    fecha_fin_mes: 6,
    fecha_fin_dia: 20
  },
  "Cáncer": {
    emoji_principal: "♋",
    emojis_secundarios: ["🌊", "🦀", "🏠"],
    fecha_inicio_mes: 6,
    fecha_inicio_dia: 21,
    fecha_fin_mes: 7,
    fecha_fin_dia: 22
  },
  "Leo": {
    emoji_principal: "♌",
    emojis_secundarios: ["☀️", "🦁", "👑"],
    fecha_inicio_mes: 7,
    fecha_inicio_dia: 23,
    fecha_fin_mes: 8,
    fecha_fin_dia: 22
  },
  "Virgo": {
    emoji_principal: "♍",
    emojis_secundarios: ["🌾", "👩", "📚"],
    fecha_inicio_mes: 8,
    fecha_inicio_dia: 23,
    fecha_fin_mes: 9,
    fecha_fin_dia: 22
  },
  "Libra": {
    emoji_principal: "♎",
    emojis_secundarios: ["⚖️", "💫", "🎨"],
    fecha_inicio_mes: 9,
    fecha_inicio_dia: 23,
    fecha_fin_mes: 10,
    fecha_fin_dia: 22
  },
  "Escorpio": {
    emoji_principal: "♏",
    emojis_secundarios: ["🌑", "🦂", "🕵️"],
    fecha_inicio_mes: 10,
    fecha_inicio_dia: 23,
    fecha_fin_mes: 11,
    fecha_fin_dia: 21
  },
  "Sagitario": {
    emoji_principal: "♐",
    emojis_secundarios: ["🎯", "🏹", "🌍"],
    fecha_inicio_mes: 11,
    fecha_inicio_dia: 22,
    fecha_fin_mes: 12,
    fecha_fin_dia: 21
  },
  "Capricornio": {
    emoji_principal: "♑",
    emojis_secundarios: ["🏔️", "🐐", "📈"],
    fecha_inicio_mes: 12,
    fecha_inicio_dia: 22,
    fecha_fin_mes: 1,
    fecha_fin_dia: 19
  },
  "Acuario": {
    emoji_principal: "♒",
    emojis_secundarios: ["🌬️", "🌊", "🔮"],
    fecha_inicio_mes: 1,
    fecha_inicio_dia: 20,
    fecha_fin_mes: 2,
    fecha_fin_dia: 18
  },
  "Piscis": {
    emoji_principal: "♓",
    emojis_secundarios: ["🌈", "🐟", "🎭"],
    fecha_inicio_mes: 2,
    fecha_inicio_dia: 19,
    fecha_fin_mes: 3,
    fecha_fin_dia: 20
  }
};

// ═══════════════════════════════════════════════════════════════
// 🔍 FUNCIÓN: Obtener zodíaco desde fecha (YYYY-MM-DD)
// ═══════════════════════════════════════════════════════════════

export function obtenerZodiaco(fechaStr) {
  if (!fechaStr || typeof fechaStr !== 'string') {
    console.warn('⚠️  Fecha de nacimiento inválida:', fechaStr);
    return null;
  }

  try {
    const [año, mes, dia] = fechaStr.split('-').map(Number);
    
    if (!año || !mes || !dia || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
      console.warn('⚠️  Formato de fecha inválido:', fechaStr);
      return null;
    }

    // Iterar sobre cada signo
    for (const [signo, datos] of Object.entries(ZODIACO_DATA)) {
      const mesInicio = datos.fecha_inicio_mes;
      const diaInicio = datos.fecha_inicio_dia;
      const mesFin = datos.fecha_fin_mes;
      const diaFin = datos.fecha_fin_dia;

      // Casos especiales: signos que cruzan año (Capricornio)
      if (mesInicio > mesFin) {
        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFin && dia <= diaFin)) {
          return signo;
        }
      } else {
        if ((mes === mesInicio && dia >= diaInicio) || (mes === mesFin && dia <= diaFin)) {
          return signo;
        }
        if (mes > mesInicio && mes < mesFin) {
          return signo;
        }
      }
    }

    console.warn('⚠️  No se pudo determinar el zodíaco para:', fechaStr);
    return null;

  } catch (error) {
    console.error('❌ Error al calcular zodíaco:', error);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// 🎨 FUNCIÓN: Obtener emojis del zodíaco
// ═══════════════════════════════════════════════════════════════

export function obtenerEmojisZodiaco(signo) {
  if (!signo || !ZODIACO_DATA[signo]) {
    console.warn(`⚠️  Signo zodiacal no encontrado: ${signo}`);
    return null;
  }

  const datos = ZODIACO_DATA[signo];
  return {
    principal: datos.emoji_principal,
    secundarios: datos.emojis_secundarios,
    todos: [datos.emoji_principal, ...datos.emojis_secundarios]
  };
}

// ═══════════════════════════════════════════════════════════════
// 📊 FUNCIÓN: Retornar data completa del zodíaco
// ═══════════════════════════════════════════════════════════════

export function obtenerDataZodiaco(signo) {
  if (!signo || !ZODIACO_DATA[signo]) {
    console.warn(`⚠️  Signo zodiacal no encontrado: ${signo}`);
    return null;
  }

  return {
    signo,
    ...ZODIACO_DATA[signo]
  };
}

// ═══════════════════════════════════════════════════════════════
// 🎯 FUNCIÓN: Calcular edad desde fecha de nacimiento
// ═══════════════════════════════════════════════════════════════

export function calcularEdad(fechaNacimientoStr) {
  if (!fechaNacimientoStr) return null;

  try {
    const [año, mes, dia] = fechaNacimientoStr.split('-').map(Number);
    const birth = new Date(año, (mes || 1) - 1, dia || 1);

    if (isNaN(birth.getTime())) return null;

    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const beforeBirthday =
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());

    if (beforeBirthday) age--;
    return age > 0 ? age : null;
  } catch (error) {
    console.warn('⚠️  Error calculando edad:', error);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// 👤 FUNCIÓN: Extraer nombre desde múltiples fuentes
// ═══════════════════════════════════════════════════════════════

export function extraerNombre(datos) {
  if (!datos || typeof datos !== 'object') {
    return 'Estudiante';
  }

  // Prioridad: nombres → displayName → nickname → email
  const base = (datos.nombres || datos.displayName || datos.nickname || datos.email || '').trim();

  if (!base) return 'Estudiante';
  if (base.includes('@')) return base.split('@')[0];     // si viene email
  return base.split(/\s+/)[0];                            // primer token (nombre)
}

// ═══════════════════════════════════════════════════════════════
// 🎨 FUNCIÓN: Renderizar texto con zodíaco visual
// ═══════════════════════════════════════════════════════════════

export function formatearZodiacoHTML(signo, nombre, edad) {
  const emojis = obtenerEmojisZodiaco(signo);
  if (!emojis) return `<span>${nombre || 'Estudiante'}</span>`;

  const edadTxt = edad ? ` — ${edad} años` : '';
  const emojiSecundario = emojis.secundarios[0] || '';

  return `
    <span class="nombre-zodiac">
      <strong>${nombre}</strong>
      <span class="zodiac-badge" title="${signo}">
        ${emojis.principal}
      </span>
    </span>
    <span class="edad-info">${edadTxt} ${emojiSecundario}</span>
  `.trim();
}

// ═══════════════════════════════════════════════════════════════
// 📋 FUNCIÓN: Debug/Prueba - Listar todos los signos
// ═══════════════════════════════════════════════════════════════

export function listarTodosLosSignos() {
  console.table(Object.keys(ZODIACO_DATA));
  return Object.keys(ZODIACO_DATA);
}

// ═══════════════════════════════════════════════════════════════
// 🧪 TEST: Ejecutar pruebas básicas
// ═══════════════════════════════════════════════════════════════

export function testHoroscopo() {
  console.log('\n═══════════════════════════════════════════════════');
  console.log('🧪 TEST DE HORÓSCOPO');
  console.log('═══════════════════════════════════════════════════\n');

  const testCases = [
    '2007-07-06',  // Leo (ejemplo: Priscila)
    '2008-01-15',  // Capricornio
    '1990-12-25',  // Capricornio (Navidad)
    '2000-02-29',  // Piscis (año bisiesto)
  ];

  testCases.forEach(fecha => {
    const signo = obtenerZodiaco(fecha);
    const edad = calcularEdad(fecha);
    const emojis = obtenerEmojisZodiaco(signo);

    console.log(`📅 Fecha: ${fecha}`);
    console.log(`   ♈ Signo: ${signo} ${emojis ? emojis.principal : '❌'}`);
    console.log(`   🎂 Edad: ${edad} años`);
    console.log(`   🎨 Emojis: ${emojis ? emojis.todos.join(' ') : 'N/A'}\n`);
  });

  console.log('═══════════════════════════════════════════════════');
}

// ✨ Exportar data completa para acceso directo
export { ZODIACO_DATA };