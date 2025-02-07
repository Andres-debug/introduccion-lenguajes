// using System;

// class Program {
//     static void Main() {
//         // Datos de un empleado
//         string nombre = "Juan Pérez";
//         double salarioBase = 2500.50;
//         double bonificacion = 300.75;

//         double salarioTotal = salarioBase + bonificacion;

//         Console.WriteLine("Empleado: " + nombre);
//         Console.WriteLine("Salario Base: " + salarioBase);
//         Console.WriteLine("Bonificación: " + bonificacion);
//         Console.WriteLine("Salario Total: " + salarioTotal);
//     }
// }











// using System;

// class Program {
//     static void Main() {
//         // Verificar mayoría de edad
//         int edad = 20;  // Cambia este valor para probar
//         bool esMayor = edad >= 18;

//         Console.WriteLine("Edad: " + edad);
//         Console.WriteLine("¿Es mayor de edad? " + (esMayor ? "Sí" : "No"));
//     }
// }



// using System;

// class Program {
//     static void Main() {
//         // Cálculo del IMC
//         double peso = 70;  // kg
//         double altura = 1.75;  // m

//         double imc = peso / Math.Pow(altura, 2);
//         string estado = imc < 18.5 ? "Bajo peso" :
//                         imc < 25 ? "Peso normal" :
//                         imc < 30 ? "Sobrepeso" : "Obesidad";

//         Console.WriteLine("IMC: " + imc.ToString("0.00"));
//         Console.WriteLine("Estado: " + estado);
//     }
// }



using System;

class Program {
    static void Main() {
        // Calculadora de descuentos en C#
        Console.Write("Ingrese el nombre del producto: ");
        string producto = Console.ReadLine();

        Console.Write("Ingrese el precio original: ");
        double precio = Convert.ToDouble(Console.ReadLine());

        Console.Write("Ingrese el porcentaje de descuento: ");
        double descuento = Convert.ToDouble(Console.ReadLine());

        if (descuento >= 0 && descuento <= 100) {
            double precioFinal = precio - (precio * descuento / 100);
            Console.WriteLine($"✅ Producto: {producto}");
            Console.WriteLine($"💲 Precio original: ${precio:F2}");
            Console.WriteLine($"🔹 Descuento aplicado: {descuento}%");
            Console.WriteLine($"💰 Precio final: ${precioFinal:F2}");
        } else {
            Console.WriteLine("❌ Error: El porcentaje de descuento debe estar entre 0 y 100.");
        }
    }
}
