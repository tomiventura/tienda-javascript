function calcularCostoTotal() {
    let costoTotal = 0;
    let continuar = true;

    while (continuar) {
        let costoProducto = prompt("Ingrese el costo del producto (o 'fin' para terminar):");

        if (costoProducto === null || costoProducto.toLowerCase() === "fin") {
        continuar = false;
        } else {
        let costo = Number(costoProducto.replace(",", "."));

        if (Number.isNaN(costo)) {
            alert("Ingrese un valor numérico válido.");
        } else {
            costoTotal += costo;
        }
    }
    }

    alert("El costo total es: $" + costoTotal.toFixed(2));
}

calcularCostoTotal();