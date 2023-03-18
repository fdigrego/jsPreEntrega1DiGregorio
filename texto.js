//* solicitar un texto, analizarlo y hacer conteo de vocales, consonantes, numeros, etc)
// new string es para convertir a un string en un objeto
let myTexto = new String(prompt('Ingrese texto a evaluar: '));
let ciclo = myTexto.length - 1;

const lasVocales = 'aáeéiíoóuú';
const lasConsonantes = 'bcdfghjklmnñpqrstvwxyz';
const losNumeros = '0123456789';
const laPuntuacion = "' '.,;:!¿¡?";


let index = 0;
let unChar;
let vocales = 0;
let consonantes = 0;
let numeros = 0;
let puntuacion = 0;
let otros = 0;
let misVocales = '';
let misConsonantes = '';
let misNumeros = '';
let misPuntuaciones = '';
let misOtros = '';

console.log(`Analizar siguiente texto: '${myTexto}'.`);

for (index = 0; index <= ciclo; index++) {
        unChar = myTexto.charAt(index).toLowerCase();
        if (lasVocales.includes(unChar)) {
                vocales++;
                misVocales = !(misVocales.includes(unChar)) ? misVocales+= unChar : misVocales;
        } else if (lasConsonantes.includes(unChar)) {
                consonantes++;
                misConsonantes = !(misConsonantes.includes(unChar)) ? misConsonantes += unChar : misConsonantes;
        } else if (losNumeros.includes(unChar)) {
                numeros++;
                misNumeros = !(misNumeros.includes(unChar)) ? misNumeros += unChar : misNumeros;
        } else if (laPuntuacion.includes(unChar)) {
                puntuacion++;
                misPuntuaciones = !(misPuntuaciones.includes(unChar)) ? misPuntuaciones += unChar : misPuntuaciones;
        } else {
                otros++;
                misOtros = !(misOtros.includes(unChar)) ? misOtros += unChar : misOtros;
        }
}
console.log(`${ciclo + 1} Caracteres: [-> voc: ${vocales} con: ${consonantes} num: ${numeros} pun: ${puntuacion} otr: ${otros} <-]`);
console.log(`Usadas: Voc [${misVocales}] Cons [${misConsonantes}] Núm [${misNumeros}] Pun [${misPuntuaciones}] Otr [${misOtros}]`);
console.log(`Repeticiones: Voc ${vocales-misVocales.length} Con ${consonantes-misConsonantes.length} Num ${numeros-misNumeros.length} Pun ${puntuacion-misPuntuaciones.length} Otr ${otros-misOtros.length}`);
