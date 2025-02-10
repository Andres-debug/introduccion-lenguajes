nombre = input("Ingrese el nombre del estudiante: ")

notas = []
suma = 0

for i in range(1,4):
    while True:
        try:
            nota = float(input(f"Ingrese la nota {i}: "))
            if 0<= nota <=5:
                break
            else:
                print("Error la nota deb estar entre 0 y 5")
        except ValueError:
            print("Error: Ingrese un numero valido")

    notas.append(nota)
    suma += nota

promedio = suma / 3
estado = "APROBADO" if promedio >= 3.0 else "REPROBADO"

print (f"{nombre} tiene un promedio de {promedio:.2f} y esta {estado}")