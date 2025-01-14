// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularEdadUsuario (anioActual,anioNacimiento) {
  return anioActual - anioNacimiento;
}

const anioActual = Number(prompt('Cuál es el año actual?'))
const anioNacimiento = Number(prompt('En que año naciste?'))

console.log("Tu edad es de " + calcularEdadUsuario(anioActual,anioNacimiento))

//salario anual
function calcularSalarioAnual(salarioMensual) {
  const MESES_EN_UN_ANIO = 12;
  return salarioMensual * MESES_EN_UN_ANIO;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'))
console.log('Tu salario anual es de ' + calcularSalarioAnual(salarioMensual) + '$')

//salario mensual
function calcularSalarioMensual(salarioAnual) {
  const MESES_EN_UN_ANIO = 12;
  return salarioAnual / MESES_EN_UN_ANIO;
}

const salarioAnual = Number(prompt('Cual es tu salario anual?'))
console.log('Tu salario mensual es de ' + calcularSalarioMensual(salarioAnual) + '$')

//salario diario
function calcularSalarioDiario(salarioMensual) {
  const DIAS_TRABAJADOS_EN_EL_MES = 30;
  return salarioMensual / DIAS_TRABAJADOS_EN_EL_MES;
}

console.log('Tu salario diario es de ' + calcularSalarioDiario(salarioMensual) + '$')

//salario semanal
function calcularSalarioSemanal(salarioDiario,diasTrabajadosPorSemana) {
  return salarioDiario * diasTrabajadosPorSemana;
}
const salarioDiario = Number(prompt('Cuál es tu salario diario?'))
const diasTrabajadosPorSemana = Number(prompt('Cuantos días trabajas por semana?'))

console.log('Tu salario semanal es de ' + calcularSalarioSemanal(salarioDiario) + '$')

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
