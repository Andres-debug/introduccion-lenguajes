const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese el nombre del estudiante: ')
let notas = []
let suma=0;

for (let i =1; i<=3; i++){
    let nota;

    do{
         nota = parseFloat(prompt(`Ingerese la nota ${i}: `))
        if(nota <0 || nota > 5 || isNaN(nota)){
            console.log('Error: la nota de estar entre 0 y 5');
        }
}while(nota <0 || nota > 5 || isNaN(nota));

    notas.push(nota)
    suma += nota;

}

let promedio = suma/3;
let estado = promedio >= 3.0 ? "APROBADO":"REPROBADO"

console.log(`${nombre} tiene un promedio de ${promedio.toFixed(2)} y esta ${estado}`)
