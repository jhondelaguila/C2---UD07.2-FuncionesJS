// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let option = NaN;
while (isNaN(option)) option = Number(prompt('¿De que tipo de objeto quieres saber su área?[0]Círculo,[1]Triángulo,[2]Cuadrado, elige una opción'));

let data = [
    {
        "radio": NaN,
    },{
        "base": NaN,
        "altura": NaN,
    },{
        "lado": NaN,
    }
];

switch (option){
    case 0:
        while(isNaN(data[option].radio)) data[option].radio = Number(prompt('Dime el radio del circulo'));
        const area_circulo = (op) => (data[op].radio**2) * Math.PI;
        console.log(area_circulo(option));
        break;
    case 1:
        while(isNaN(data[option].base)) data[option].base = Number(prompt('Dime la base del triangulo'));
        while(isNaN(data[option].altura)) data[option].altura = Number(prompt('Dime la altura del triangulo'));
        const area_triangulo = (op) => (data[op].base * data[op].altura) / 2;
        console.log(area_triangulo(option));
        break;
    case 2:
        while(isNaN(data[option].lado)) data[option].lado = Number(prompt('Dime el lado del cuadrado'));
        const area_cuadrado = (op) => data[op].lado**2; 
        console.log(area_cuadrado(option));
        break;
    default:
        console.log('La opcion elegida no es la correcta');
        break;
}