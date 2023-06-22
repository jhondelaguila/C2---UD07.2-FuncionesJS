// 9. Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
// para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.

let size = NaN;
while (isNaN(size) || size < 1) {
    size = Number(prompt('Ingresa el tamaño del array'));
    if(size.toString().includes('.')) size = -1;
}

const fill_array = (min,max) => {
    array = [];
    for (let index = 0; index < size; index++) {
        array.push(Math.floor(Math.random()*(max - min + 1) + min));
    }

    return array;
};

const show_array = () => {
    let sum = 0;
    const new_array = fill_array(0,9);
    console.log(new_array);
    for (let index = 0; index < size; index++) {
        sum += new_array[index];
    }
    console.log(sum);
}

show_array();