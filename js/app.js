const precioEntrada = 20;
const cuposIniciales = 50;
const descuentoEstudiante = 0.30;
const descuentoDocente = 0.15;
const descuentoGeneral = 0;
const entradasMaximasCompra = 5;

let cuposDisponibles = cuposIniciales;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;

function igualarTexto(texto) {
    const textoIgualado = texto.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 

    if (textoIgualado === "estudiante") {
        return { nombre: "Estudiante", descuento: descuentoEstudiante };
    } else if (textoIgualado === "docente") {
        return { nombre: "Docente", descuento: descuentoDocente };
    } else if (textoIgualado === "publico general" || textoIgualado === "general" || textoIgualado === "publico") {
        return { nombre: "Público general", descuento: descuentoGeneral };
    }
    return null;
}

function validarCantidad(texto) {
    const limpio = texto.trim();
    if (!/^\d+$/.test(limpio)) {
        return null;
    }
    const cantidadNumerica = Number(limpio);
    if (cantidadNumerica >= 1 && cantidadNumerica <= entradasMaximasCompra) {
        return cantidadNumerica;
    }
    return null;
}

function comprarEntradas() {
    if (cuposDisponibles === 0) {
        alert("Evento agotado. No es posible realizar compras.");
        return;
    }

    const nombreIngresado = prompt("Nombre del comprador:");
    if (nombreIngresado === null || nombreIngresado.trim() === "") {
        alert("Compra rechazada: el nombre es obligatorio.");
        return;
    }

    const nombre = nombreIngresado.trim();
    const tipoIngresado = prompt("Tipo de participante (estudiante, docente o público general):");
    if (tipoIngresado === null) {
        alert("Compra cancelada.");
        return;
    }

    const tipo = igualarTexto(tipoIngresado);
    if (tipo === null) {
        alert("Compra rechazada: tipo de participante no válido.");
        return;
    }

    const cantidadIngresada = prompt("Cantidad de entradas (1 a " + entradasMaximasCompra + "):");
    if (cantidadIngresada === null) {
        alert("Compra cancelada.");
        return;
    }

    const cantidad = validarCantidad(cantidadIngresada);
    if (cantidad === null) {
        alert("Compra rechazada: la cantidad debe ser un número entero entre 1 y " + entradasMaximasCompra + ".");
        return;
    }

    if (cantidad > cuposDisponibles) {
        alert("Compra rechazada: solo quedan " + cuposDisponibles + " cupos y se solicitaron " + cantidad + ".");
        return;
    }

    const subtotal = cantidad * precioEntrada;
    const descuento = subtotal * tipo.descuento;
    const total = subtotal - descuento;

    cuposDisponibles -= cantidad;
    entradasVendidas += cantidad;
    ingresosAcumulados += total;
    comprasRealizadas++;

    const porcentaje = tipo.descuento * 100;
    const resumen =
        "RESUMEN DE COMPRA\n\n" +
        "Nombre: " + nombre + "\n" +
        "Tipo de participante: " + tipo.nombre + "\n" +
        "Cantidad de entradas: " + cantidad + "\n\n" +
        "Subtotal: $" + subtotal.toFixed(2) + "\n" +
        "Descuento (" + porcentaje + " %): $" + descuento.toFixed(2) + "\n" +
        "Total a pagar: $" + total.toFixed(2) + "\n\n" +
        "Compra realizada exitosamente.\n" +
        "Cupos restantes: " + cuposDisponibles;

    alert(resumen);
    console.log(resumen);
}

function consultarCupos() {
    let mensaje;
    if (cuposDisponibles > 10) {
        mensaje = "Cupos disponibles";
    } else if (cuposDisponibles >= 1) {
        mensaje = "Últimos cupos disponibles";
    } else {
        mensaje = "Evento agotado";
    }

    const texto = "Cupos disponibles: " + cuposDisponibles + "\n" + mensaje;
    alert(texto);
    console.log(texto);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "SISTEMA INNOVA ESPE 2026\n\n" +
            "1. Comprar entradas\n" +
            "2. Consultar cupos disponibles\n" +
            "3. Consultar ingresos acumulados\n" +
            "4. Salir\n\n" +
            "Seleccione una opción:"
        );
        
        switch (opcion.trim()) {
            case "1":
                comprarEntradas();
                break;
            case "2":
                consultarCupos();
                break;
            case "3":
                consultarIngresos();
                break;
            case "4":
                mostrarResumenFinal();
                break;
            default:
                alert("Opción inexistente. Ingrese un número del 1 al 4.");
        }
    } while (opcion.trim() !== "4");
}
menu()