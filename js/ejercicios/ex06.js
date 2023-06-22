// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

let number = NaN;
while (isNaN(number) || number < 0) {
    number = Number(prompt('Ingresa un número'));
    if(number.toString().includes('.')) number = -1;
}

const number_of_digits = (num) => num.toString().length;

console.log(number_of_digits(number));