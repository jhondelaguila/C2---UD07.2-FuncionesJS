// 11. Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array

let size = NaN;
while (isNaN(size) || size < 1) {
  size = Number(prompt("Ingresa el tamaño de los arrays"));
  if (size.toString().includes(".")) size = -1;
}

let range = [NaN, NaN];
while (isNaN(range[0]) || range[0] < 0)
  range[0] = Number(
    prompt("En que rango quieres crear estos números, escribe el primer valor")
  );
while (isNaN(range[1]) || range[1] < 0) range[1] = Number(prompt("Ahora el siguiente valor"));

if (range[0] > range[1]) range.reverse();

const fill_array = (min, max) => {
    array = [];
    for (let index = 0; index < size; index++) {
        num = Math.floor(Math.random() * (max - min + 1) + min);
        array.push(num);
    }
  
    return array;
};

let array1 = fill_array(range[0],range[1]);
let array2 = array1;

array1 = fill_array(range[0],range[1]);

const multiply_arrays = (a1,a2) => {
    newArray = [];
    for (let index = 0; index < size; index++) {
        newArray.push(a1[index]*a2[index]);
    }

    return newArray;
}

const a1_a2 = multiply_arrays(array1,array2);
console.log(array1,array2,a1_a2);

