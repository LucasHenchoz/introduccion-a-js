// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = 'lucas';
const NOMBRE_HERMANO = 'leonardo';
const nombreUsuario = prompt('Cuál es tu nombre?').toLowerCase();


if(MI_NOMBRE  === nombreUsuario) {
  console.log(`Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`)
} else if (NOMBRE_HERMANO  === nombreUsuario) {
  console.log(`Hola ${nombreUsuario}, te llamás igual que mi hermano`)
} else {
  console.log(`Hola ${nombreUsuario}`)
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const MI_EDAD = 21;
const edadUsuario = Number(prompt('Cuántos años tenés?'))
if(MI_EDAD === edadUsuario) {
  console.log('Tenés mi misma edad')
} else if(MI_EDAD > edadUsuario) {
  console.log('Soy mayor que vos')
} else {
  console.log('Soy menor que vos')
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const usuarioPoseeDocumento = prompt('Tenés documento? (contestar con sí o no)').toLowerCase()
const EDAD_MINIMA_DE_ENTRADA = 18;

if(usuarioPoseeDocumento === 'si' || 'sí') {
  const edadUsuario = prompt('Cuántos años tenés?')
  if(edadUsuario >= EDAD_MINIMA_DE_ENTRADA) {
    console.log('Podés entrar al bar')
  }  if (edadUsuario < EDAD_MINIMA_DE_ENTRADA) {
    console.log('No podes pasar al bar flaco, volvé cuando seas mayor')
  }
} else if (usuarioPoseeDocumento === 'no') {
  console.log('Sin documento no entrás acá')
} else {
  console.log('No entiendo tu respuesta')
}