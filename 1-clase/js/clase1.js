//let edad, nombre, direcciones
//const PI, e, g

// let nombre = "Andres";
// let salarioBase = 2500.50;
// let bonificacion = 300.75;

// let salarioTotal = salarioBase+bonificacion;

// console.log('Su salario total es igual a',salarioTotal)

// let edad = 18;
// let esMayor = edad >= 18;//true-false

// if (esMayor){
//     console.log("Es Mayor de Edad")
// }else{
//     console.log("No es Mayor de Edad")
// }

//Operador ternario

// console.log("Es mayor de edad?",esMayor ? "Si":"No")
// console.log("Edad: ",edad)


// let peso = 55;
// let altura = 1.75;

// let imc = peso / (altura**2);

// let estado = imc < 18.5 ? "Bajo Peso":
//              imc <25 ? "Peso Normal":
//              imc <30 ? "SobrePeso" : "Obesidad";

// console.log("IMC: ",imc.toFixed(2))
// console.log("Estado: ",estado)

//Precio Final=Precio Original−(Precio Original×Descuento/100)

// ✅ Producto: Laptop
// 💲 Precio original: $1000.00
// 🔹 Descuento aplicado: 20%
// 💰 Precio final: $800.00

//prompt

const prompt = require('prompt-sync')();

let producto = prompt("Ingrese el nombre del producto:");
let precio = parseFloat(prompt("Ingrese el precio original:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

if (descuento >= 0 && descuento <= 100) {
    let precioFinal = precio - (precio * descuento / 100);
    console.log(`✅ Producto: ${producto}`);
    console.log(`💲 Precio original: $${precio.toFixed(2)}`);
    console.log(`🔹 Descuento aplicado: ${descuento}%`);
    console.log(`💰 Precio final: $${precioFinal.toFixed(2)}`);
} else {
    console.log("❌ Error: El porcentaje de descuento debe estar entre 0 y 100.");
}