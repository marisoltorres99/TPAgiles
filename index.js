palabras = require('./palabras.js')

class Ahorcado{ 
  constructor(palabra) {
    this.palabra = palabra;
    this.letrasAdivinadas = [];
    this.letrasFallidas = [];
    this.fallosRestantes = 6; 
    this.dificultad = "";
    this.arrayPalabras = this.palabra.split("");
  }
  adivinarLetra(letraAdivinada) {
  if (this.palabra.includes(letraAdivinada)){
    return true;
  }
    return false;
}
} 

function main(){
  palabra = elegirPalabra(palabras);
  mostrarPalabraOculta(palabra);
}


function elegirPalabra(palabras){

  palabra = palabras.medio[Math.floor(Math.random() * palabras.medio.length)];
  return palabra;
}

function mostrarPalabraOculta(palabra) {
  const arrayPalabras = palabra.split("");
  let palabraOculta = arrayPalabras.map(p => "_");
  return palabraOculta.join(" ");
}

module.exports = {elegirPalabra, mostrarPalabraOculta};
