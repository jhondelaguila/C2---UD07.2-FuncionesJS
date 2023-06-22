// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar.

const get_values = () => {
    value = NaN;
    count = 0;
    values = [];
    while (isNaN(value) || count < 10){
        value = Number(prompt(`Ingresa 10 valores númericos, uno a uno. Números ingresados = ${count}`));
        if(!isNaN(value)) {
            values.push(value);
            count++;
        }
    }

    return values;
};

const show_values = () => {
    console.log(get_values());
};

show_values();

