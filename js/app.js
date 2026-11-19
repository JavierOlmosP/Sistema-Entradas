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