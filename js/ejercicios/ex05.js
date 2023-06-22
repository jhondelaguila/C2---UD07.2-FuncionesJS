// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

const decimal_to_binary = (num) => {
    binary = "";

    if(num === 0) return("0b0");
    else {
        while (num > 0){
            binary = (num % 2) + (binary);
            num = Math.floor(num / 2);
        }
        return "0b"+binary;
    }
};

console.log(decimal_to_binary(number));