// 12. Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc

let size = NaN;
while (isNaN(size) || size < 1) {
  size = Number(prompt("Ingresa el tamaño del array"));
  if (size.toString().includes(".")) size = -1;
}

let digit = NaN;
while (isNaN(digit) || digit < 0 || digit > 9) {
    digit = Number(prompt("Ingresa el digito en el que tiene que acabar el número para ser mostrado"));
    if (digit.toString().includes(".")) digit = -1;
}

const fill_array = (min, max) => {
    array = [];
    for (let index = 0; index < size; index++) {
        num = Math.floor(Math.random() * (max - min + 1) + min);
        array.push(num);
    }
  
    return array;
};

const array1 = fill_array(1,300);

const get_values_finished_in = (num,a) => {
    array = [];
    for (let index = 0; index < a.length; index++) {
        last_index = a[index].toString().length-1;
        if(a[index].toString()[last_index] == num) array.push(a[index]);
    }
    console.log(array);
}

get_values_finished_in(digit,array1)

