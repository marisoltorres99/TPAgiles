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
  //Checkear si la letra está en alguno de los arreglos de letras adivinadas o fallidas
  if (this.palabra.includes(letraAdivinada)){
    //Agregar la letra en el array letrasAdivinadas
    return true;
  }
    //Agregar la letra en el array letrasFallidas
    //Restar un intento
    return false;
  //Checkear si ganó o no
  //Mostrar Palabra oculta e intentos restantes
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
