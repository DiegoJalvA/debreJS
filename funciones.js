//EJERCICIO 1
let misNombres = "Diego"; 
// Declaramos una variable llamada misNombres
// y le asignamos nuestro primer nombre como valor.

// Mostramos el contenido de la variable en la consola
console.log(misNombres);

//EJERCICIO 2
let miEdad = "19"; //Declaramos la variable llamada miEdad
// y le asigamos nuestra edad

// Mostramos el contenido de la variable en la consola
console.log(miEdad);


//EJERCICIO 3
let tieneMascota = "true"; //Declaramos la variable
// TieneMascota y asigamos el valor  booleano :
// True si tienes mascotas , falso si no.

// Mostramos el contenido de la variable en la consola
console.log(tieneMascota)


//EJERCICIO 4
//Declaramos una variable con el numero que queremos evaluar 
let numero = 14;

//Usamos una estructura condicional para evaluar el numero
//Este bloque se ejecuta si el nuemero es mayor que cero
if (numero > 0) {
    console.log("El numero es mayor que cero");
} 
//Este bloque se ejecuta si el numero es menor que cero
else if (numero < 0){
    console.log("El numero es menor que cero");
} 
// En este caso, significa que el número es igual a cero
else {
    console.log("El numero es igual a cero");
}


//EJERCICIO 5
// Declaramos una variable llamada hobbies
// y le asignamos un array con tres actividades 
// que nos gustan
let hobbies = ["ver peliculas", "escuchar musicas", "jugar"];

//Mostramos el conetenido del array en la consola
console.log(hobbies);


//EJERCICIO 6
// Creamos un objeto llamado usuario con tres propiedades:
// nombreUsuario: guarda un nombre (tipo texto)
// ciudad: guarda el nombre de una ciudad (tipo texto)
// tieneLicencia: indica si tiene licencia (tipo booleano)
let usuario = {
    nombreUsuario: "Diego",
    cuidad: "Milagro",
    tieneLicencia: false
};

//Mostramos en consola 
console.log(usuario);


//EJERCICIO 7 
//Declaramos una variable llamada datoVacio
//y le asignamos el valor de null para indicar 
// que esta vacia
let datoVacio = null;

//Mostramos en consola
console.log(datoVacio);


//EJERCICIO 8 
//Solicitamos al usuario que ingrese un numero
let numeroU = prompt ("Ingresa un numero");
// variable numeroU por que la variable numero 
// ya esta utilizada

//Convertimos el valor ingresado a tipo numero
numeroU = Number(numero);

//Mostramos los numeros del 1 hasta el numero ingresado
for (let i = 1 ; i <= numeroU; i++){
    console.log(i);
}


//EJERCICIO 9 
//Declaramos una variable llamada colorHexadecimal
//y le asignamos un valor en formato hexadecimal
//para colores
let colorHexadecimal = "0000FF";

//Mostramos el color en la consola
console.log(colorHexadecimal);


//EJERCICIO 10
//Usamos una template string para guardar
//el nombre completo 
let miNombreCompleto = `${"Diego"} ${"Alvarado"}`;

//Mostramos el resultado en consola 
console.log(miNombreCompleto)


//EJERCICIO 11 
//Sumamos 25 y 15, y guardamos el resultado
let resultadoSuma = 25 + 15;

//Mostramos el resultado en la consola 
console.log(resultadoSuma);


//EJERCICIO 12 
//Restamos  50 y 20, y guardamos el resultado
let resultadoResta = 50 - 20;

//Mostramos el resultado en la consola 
console.log(resultadoResta);


//EJERCICIO 13
//Multiplicamos 8 y 4, y guardamos el resultado
let resultadoMultiplicacion = 8 * 4;

//Mostramos el resultado en la consola 
console.log(resultadoMultiplicacion);


//EJERCICIO 14
//Divimos 100 y 5, y guardamos el resultado
let resultadoDivision = 100 / 5;

//Mostramos el resultado en la consola 
console.log(resultadoDivision);


//EJERCICIO 15
//Obtenemos el residuo de dividir 15  entre 4 y 
//lo guardamos en la variable resultadoModulo
let resultadoModulo = 15 % 4;

//Mostramos el resultado en la consola 
console.log(resultadoModulo);


//EJERCICIO 16 
// Creamos un array con algunos elementos
let animales = ["perro", "gato", "conejo", "loro"];

// Eliminamos un elemento por su valor: "conejo"
let indiceConejo = animales.indexOf("conejo");
animales.splice(indiceConejo, 1); // Elimina 1 elemento desde la posición de "conejo"

// Eliminamos otro elemento por su índice (por ejemplo, el que está en la posición 1)
animales.splice(1, 1); // Elimina el segundo elemento

// Mostramos el array actualizado
console.log(animales);


//EJERCICIO 17
//Declaramos dos variables numericas 
let numero1 = 10;
let numero2 = 10;

//Comparamos si tienen el mismo valor y guardamos el resultado
let igualdadNumeros = (numero1 === numero2);

//Mostramos el resultado en la consola 
console.log(igualdadNumeros);


//EJERCICIO 18
//Declaramos dos numeros 
let numeroA = 10;
let numeroB = 10;

//Comparamos si numeroA es menor que NumeroB
let esMenor = numeroA < numeroB;

//Mostramos el resultado en la consola 
console.log(esMenor);


//EJERCICIO 19
//El usuario guarda una palabra secreta 
let palabraSecreta = prompt("Crea tu palabra secreta:");

//Luego se le pide que la escriba 
let intentoUsuario = prompt("Introduce la palabra secreta:");

//Compramos ambos ignorando mayusuculas o minusiculas 
let coincide = palabraSecreta.toLocaleLowerCase() === intentoUsuario.toLocaleLowerCase();

//Mostramos el resultado 
if (coincide) {
    console.log("La palabra coincide.");
}
else {
    console.log("La palabra incorrecta");
}

//EJERCICIO 20
//Pedimos la edad del usuario 
let edad = prompt ("¿Cuantos años tienes?");

//Pedimos sus ingresos mensuales 
let ingresos = prompt ("¿Cuantos ganas al mes?");

//Convertimos los datos a numeros
edad = Number (edad);
ingresos = Number (ingresos);

//Verificamos si cumple con ambas condiciones para el descuento
let tieneDescuento = edad > 18 && ingresos < 500;

//Mostramos el resultado 
if (tieneDescuento) {
    console.log("Tiene derecho al descuento especial.");
}
else{
    console.log("No tienes derecho al descuento.")
}


//EJERCICIO 21
//Declaramos una variable llamada puntaje
let puntaje = 10;

//Incrementamos en una unidad 
puntaje = puntaje + 1;

//Mostramos el nuevo valor en la consola
console.log(puntaje);


//EJERCICIO 22
//Declaramos una variable llamada vidasRestantes
let vidasRestantes = 3;

// Restamos una vida usando el operador de decremento
vidasRestantes--;

//Mostramos el nuevo valor en la consola
console.log(vidasRestantes);


//EJERCICIO 23
//Creamos un array 
let frutas = ["pera", "manzana", "uva", "fresa", "sandia"];

//Mostramos el contenido del array
console.log(frutas)


//EJERCICIO 24
//Verificamos si el array incluye 'manzana'
let contieneManzana = frutas.includes("manzana");

//Mostramos el resulatdo 
console.log(contieneManzana);


// EJERCICIO 25 
// Creamos un array de objetos
let objetos = ["lapiz", "borrador", "cuaderno", "tijeras"];

// Añadimos un objeto al final del array
objetos.push("marcador");

// Insertamos un obejto en la segunda posición (índice 1)
objetos.splice(1, 0, "regla");

// Mostramos el array actualizado
console.log(objetos);
