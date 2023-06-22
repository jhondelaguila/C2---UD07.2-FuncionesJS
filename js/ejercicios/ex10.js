// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

let size = NaN;
while (isNaN(size) || size < 1) {
  size = Number(prompt("Ingresa el tamaño del array"));
  if (size.toString().includes(".")) size = -1;
}

let range = [NaN, NaN];
while (isNaN(range[0]) || range[0] < 0)
  range[0] = Number(
    prompt("En que rango quieres crear estos números, escribe el primer valor")
  );
while (isNaN(range[1]) || range[1] < 0) range[1] = Number(prompt("Ahora el siguiente valor"));

if (range[0] > range[1]) range.reverse();

const isPrime = (num) => {
  divisors_counter = 0;
  for (index = 1; index <= num; index++) {
    if (num % index == 0) divisors_counter++;
  }

  return divisors_counter > 2 ? false : true;
};

const fill_array = (min, max) => {
  array = [];
  for (let index = 0; index < size; index++) {
    random_num = 0;
    do {
      random_num = Math.floor(Math.random() * (max - min + 1) + min);
    } while (!isPrime(random_num));
    array.push(random_num);
  }

  return array;
};

const array_of_primes = fill_array(range[0],range[1]);

console.log(array_of_primes);
console.log(Math.max(...array_of_primes));

