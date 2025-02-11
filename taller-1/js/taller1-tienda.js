const prompt = require('prompt-sync')();

let producto = prompt ("Ingrese el nombre del producto: ");
let precio = parseFloat(prompt("Ingrese el precio por unidad: "));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades: "));

let total = precio * cantidad;
let descuento = cantidad >10 ? 0.15: cantidad>5?0.10 : 0.05;
let totalConDescuento = total - (total*descuento)


console.log(`Resumen de compra:
Producto: ${producto}
Precio total sin descuento: ${total.toFixed(2)}
Descuento aplicado: ${descuento}
Precio Final ${totalConDescuento.toFixed(2)}
`)