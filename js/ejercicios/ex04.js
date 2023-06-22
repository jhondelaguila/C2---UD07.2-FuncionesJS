// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
// si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let number = NaN;
while (isNaN(number)) number = Number(prompt('Ingresa un número'));

const factorial = (num) =>{
    sum = 0;
    for (let index = 0; index <= num; index++) {
        if(num == 0 || num == 1 || index < 1) sum = 1;
        else sum *= index;
    }
    console.log(sum);
};

factorial(number);