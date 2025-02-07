# nombre = "Juan Perez"
# salario_base=2500.50
# bonificacion = 300.75

# salario_total= salario_base+ bonificacion

# print("Salario Total",salario_total)

# edad =20
# es_mayor = edad >=18

# print("Edad ",edad)
# print("Es Mayor de edad?", "Si" if es_mayor else "No")

# Cálculo del IMC
# peso = 70  # kg
# altura = 1.75  # m

# imc = peso / (altura ** 2)
# estado = "Bajo peso" if imc < 18.5 else "Peso normal" if imc < 25 else "Sobrepeso" if imc < 30 else "Obesidad"

# print(f"IMC: {imc:.2f}")
# print("Estado:", estado)

# Calculadora de descuentos en Python
producto = input("Ingrese el nombre del producto: ")
precio = float(input("Ingrese el precio original: "))
descuento = float(input("Ingrese el porcentaje de descuento: "))

if 0 <= descuento <= 100:
    precio_final = precio - (precio * descuento / 100)
    print(f"✅ Producto: {producto}")
    print(f"💲 Precio original: ${precio:.2f}")
    print(f"🔹 Descuento aplicado: {descuento}%")
    print(f"💰 Precio final: ${precio_final:.2f}")
else:
    print("❌ Error: El porcentaje de descuento debe estar entre 0 y 100.")
