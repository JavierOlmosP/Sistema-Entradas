# Sistema Innova ESPE 2026

Prototipo en JavaScript nativo para registrar la compra de entradas, calcular descuentos y controlar los cupos del evento ficticio **Innova ESPE 2026**.

## Estructura

```
Olmos_Javier_Js/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Cómo ejecutarlo

1. Clona el repositorio desde la consola en la ruta deseada con:
    git clone https://github.com/JavierOlmosP/Sistema-Entradas.git
2. Abre `index.html` en el navegador.
3. Interactúa con los cuadros de diálogo.

## Configuración

|Concepto|Valor|
|-|-|
|Precio por entrada|$20|
|Cupos iniciales|50|
|Descuento estudiantes|30 %|
|Descuento docentes|15 %|
|Público general|0 %|
|Máximo por compra|5|

## Funcionalidades

* **Menú principal** con `do...while` y `switch`.
* **Compra de entradas** con validación de nombre, tipo de participante y cantidad (entero entre 1 y 5), verificación de cupos y resumen de compra.
* **Consulta de cupos** con mensaje según disponibilidad.
* **Consulta de ingresos**: entradas vendidas, ingresos y número de compras.
* **Salir** con resumen final.

Las compras rechazadas no modifican cupos, ingresos ni contadores.

## Casos de prueba

|Escenario|Resultado|
|-|-|
|3 entradas, estudiante|$42.00|
|2 entradas, docente|$34.00|
|1 entrada, público general|$20.00|
|0 entradas|Rechazada|
|6 entradas|Rechazada|
|Texto en lugar de cantidad|Rechazada|
|Cantidad mayor a los cupos restantes|Rechazada|
|Opción de menú inexistente|Mensaje de error|
|Opción 4|Finaliza el sistema|

## Autor

Javier Olmos