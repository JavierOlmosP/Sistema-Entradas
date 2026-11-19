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

function comprarEntradas() {
    const nombreIngresado = prompt("Nombre del comprador:");
    if (nombreIngresado === null || nombreIngresado === "") {
        alert("Compra rechazada: el nombre es obligatorio.");
        return;
    }
    const nombre = nombreIngresado;
    const tipoIngresado = prompt("Tipo de participante (estudiante, docente o público general):");
    if (tipoIngresado === null) {
        alert("Compra cancelada.");
        return;
    }

    const cantidadIngresada = prompt("Cantidad de entradas (1 a " + entradasMaximasCompra + "):");
    if (cantidadIngresada === null) {
        alert("Compra cancelada.");
        return;
    }
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
        
        switch (opcion) {
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
    } while (opcion !== "4");
}
menu()