import palabras from './palabras.js';  

export default class Ahorcado {
  constructor(palabra, dificultad = "medio") {

    this.dificultad = dificultad;
    this.palabra = palabra || this.elegirPalabra(palabras);
    this.letrasAdivinadas = [];
    this.letrasFallidas = [];
    this.fallosRestantes = 6;
    this.arrayPalabras = this.palabra.split("");
  }
  adivinarLetra(letraAdivinada) {
    if (this.letrasAdivinadas.includes(letraAdivinada) || this.letrasFallidas.includes(letraAdivinada)) {
      return;
    }
    if (this.palabra.includes(letraAdivinada)) {
      this.letrasAdivinadas.push(letraAdivinada);
    } else {
      this.letrasFallidas.push(letraAdivinada);
      this.fallosRestantes -= 1;
    }

    if (this.gano()) return 'gano';
    if (this.perdio()) return 'perdio';

    return '';
  }

  mostrarPalabraOculta() {
    let palabraAMostrar = ""
    for (const letra of this.palabra) {
      if (this.letrasAdivinadas.includes(letra)) {
        palabraAMostrar += letra + " "
      } else {
        palabraAMostrar += "_ "
      }
    }
    return palabraAMostrar.trim();
  }

  gano() {
    for (const letra of this.arrayPalabras) {
      if (!this.letrasAdivinadas.includes(letra)) {
        return false;
      }
    }
    return true;
  }

  perdio() {
    return this.fallosRestantes === 0;
  }

  elegirPalabra() {
    const palabra = palabras[this.dificultad][Math.floor(Math.random() * palabras[this.dificultad].length)];
    return palabra;
  }

  elegirDificultad(dif){
    if(dif !== "facil" && dif !== "medio" && dif !== "dificil"){
      dif = "medio";
    }
    this.dificultad = dif;
    return dif;
  }

   get palabraMostrada() {
    let resultado = '';
    for (let char of this.palabra) {
      if (this.letrasAdivinadas.includes(char)) {
        resultado += char;
      } else {
        resultado += '_';
      }
    }
    return resultado;
  }
}
