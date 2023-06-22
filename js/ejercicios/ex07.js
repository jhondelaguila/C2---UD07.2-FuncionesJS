// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// EJERCICIOS JS - Funciones 
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros = NaN;
while (isNaN(euros)) euros = Number(prompt('Introduce una cantidad en euros para hacer el cambio a otras monedas'));

let option = NaN;
while (isNaN(option)) option = Number(prompt('¿A que moneda quieres hacer el cambio?[0]dólar,[1]yen,[2]libra, elige una opción'));

const currency = ["dólar","yen","libra"]

const exchange_euro_to = (eur,exchange) => {
    switch (exchange){
        case "dólar":
            console.log(`${(eur * 1.28611).toFixed(2)}$`);
            break;
        case "yen":
            console.log(`${(eur * 129.852).toFixed(2)} yenes`);
            break;
        case "libra":
            console.log(`${(eur * 0.86).toFixed(2)} libras`);
            break;
        default:
            console.log('La opcion elegida no es la correcta');
            break;
    }
};

exchange_euro_to(euros,currency[option]);