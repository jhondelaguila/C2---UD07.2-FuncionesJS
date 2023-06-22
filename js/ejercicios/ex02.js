// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

let n_random_numbers = NaN;
while (isNaN(n_random_numbers)) n_random_numbers = Number(prompt('Escribe la cantidad de números aleatorios que quieres crear'));

let range = [NaN,NaN];
while (isNaN(range[0]) || range[0] < 0) range[0] = Number(prompt('En que rango quieres crear estos números, escribe el primer valor'));
while (isNaN(range[1]) || range[1] < 0) range[1] = Number(prompt('Ahora el siguiente valor'));

if(range[0]>range[1]) range.reverse();

const generate_n_random_numbers = (n,n_range) => {
    for (let index = 0; index < n; index++) {
        console.log(Math.floor(Math.random() * (n_range[1] - n_range[0] + 1) + n_range[0]));
    }
};

generate_n_random_numbers(n_random_numbers,range);