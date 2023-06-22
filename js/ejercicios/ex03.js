// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si
// es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí
// mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si
// es primo.

let number = NaN;
while(isNaN(number)) number = Number(prompt('Ingresa un número'));

const isPrime = (num) => {
    divisors_counter = 0;
    for (index = 1; index <= num; index++) {
        if(num % index == 0) divisors_counter++;
    }

    return divisors_counter > 2 ? false : true;
}

console.log(isPrime(number));