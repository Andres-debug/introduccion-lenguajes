producto = input("Ingrese el nombre del producto: ")
precio = float(input("Ingrese el precio por unidad: "))
cantidad= int(input("Ingrese la cantidad de unidades: "))

total = precio * cantidad
descuento = 0.15 if cantidad > 10 else 0.10 if cantidad > 5 else 0.05
total_con_descuento = total - (total*descuento)

print(f"Resumen de compra:\n"
      f"Producto: {producto}\n"
      f"Precio total sin Descuento: ${total:.2f}\n"
      f"Descuento aplicado: {descuento*100}%\n"
      f"Precio Final: ${total_con_descuento:.2f}"
      
      )