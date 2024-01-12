//Crear una función que ingrese dos números por teclado, realizar un menú de opciones para: Sumar -- Restar -- Multiplicar y Dividir.
let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));

let Operacion = (num1, num2) => {
    let opcion = prompt("1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");

    switch (opcion) {
        case "1":
            return num1 + num2;
        case "2":
            return num1 - num2;
        case "3":
            return num1 * num2;
        case "4":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "No es posible dividir por cero";
            }
        }
};

let resul = Operacion(numero1, numero2);
console.log("El resultado es: " + resul);

/*Crear una función que lea tres notas de un alumno, calcula el promedio e indica si está suspendido o aprobado. (<=6 "Suspendido" -- >=7 "Aprobado").*/



let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

let calcularPromedioYEstado = (nota1, nota2, nota3) => {
   
    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = promedio <= 6 ? "Reprobado" : "Aprobado";
    return { promedio, estado };
};

let resultado = calcularPromedioYEstado(nota1, nota2, nota3);
console.log(`El promedio es ${resultado.promedio}. El alumno esta ${resultado.estado}.`);

 //Crea una función que a partir del precio de un producto calcule el precio total (precio+iva).

 let calcularPrecioT = (precio) => { 
    const ivaPorcentaje = 0.12;  
    return precio + (precio * ivaPorcentaje); // Corregir el nombre de la variable 
}; 
 
let precioProducto = parseFloat(prompt("Ingrese el precio del producto")); 
 
let precioTotal = calcularPrecioT(precioProducto); 
console.log(`El precio total es: ${precioTotal}`);

//Realizar un programa para una concesionaria de autos: Si el auto a la venta es un ford fiesta, el descuento es de un 5%.Si el coche a la venta es un ford focus, el descuento es del 10%. El usuario introduce el artículo (o su código) y el programa muestra el descuento correspondiente por pantalla. Utilizar funciones.
let obtenerDescuento = (modelo) => { 
    switch (modelo) { 
        case "ford fiesta": 
            return 5; 
        case "ford focus": 
            return 10; 
        default: 
            return 0; 
    } 
}; 
 
let modeloAuto = prompt("Ingrese el modelo del auto a la venta ford fiesta o ford focus):"), 
    descuento = obtenerDescuento(modeloAuto); 
 
if (descuento > 0) { 
    console.log(`El descuento para un ${modeloAuto} es del ${descuento}%.`); 
} else { 
    console.log("No se reconoce el modelo del auto o no hay descuento disponible para este modelo."); 
}



