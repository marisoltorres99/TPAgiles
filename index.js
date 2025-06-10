palabras = require('./palabras.js')

function main(){
  palabra = elegirPalabra(palabras);
  mostrarPalabraOculta(palabra);
}


function elegirPalabra(palabras){
  palabra = palabras.medio[Math.floor(Math.random() * palabras.medio.length)];
  return palabra;
}

function mostrarPalabraOculta(palabra) {
  return "______";
}

module.exports = {elegirPalabra, mostrarPalabraOculta};
