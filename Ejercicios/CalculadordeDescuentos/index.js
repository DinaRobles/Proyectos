function Calculardescuento (precio, descuento) {
    if (precio <= 0 || descuento < 0 || descuento > 100){
        return "Los valores ingresados son inválidos"
    }
    else if (descuento === 0){
        return "El precio sin descuento es: " + precio
    }
    else {
        let porcentaje = descuento / 100
        let precioConDescuento = precio * porcentaje
        let  resultado = precio - precioConDescuento
        return "El precio final con el descuento " + "que fue de: " + precioConDescuento +" aplicado da: " + resultado
    }
}

console.log(Calculardescuento (75000,30))