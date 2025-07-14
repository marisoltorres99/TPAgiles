import palabras from './palabras.js';  

export default class Ahorcado {
  constructor(palabra) {
    // Inicializar el juego con una palabra aleatoria
    this.palabra = palabra || this.elegirPalabra(palabras);
    this.letrasAdivinadas = [];
    this.letrasFallidas = [];
    this.fallosRestantes = 6;
    this.dificultad = "";
    this.arrayPalabras = this.palabra.split("");
  }
  adivinarLetra(letraAdivinada) {
    if (this.letrasAdivinadas.includes(letraAdivinada) || this.letrasFallidas.includes(letraAdivinada)) {
      console.log(`"La letra "${letraAdivinada} ya fue intentada"`);
      return;
    }
    if (this.palabra.includes(letraAdivinada)) {
      this.letrasAdivinadas.push(letraAdivinada);
    } else {
      this.letrasFallidas.push(letraAdivinada);
      this.fallosRestantes -= 1;
    }

    if (this.gano()) {
      console.log("Ganaste la palabra es", this.palabra)
      return
    }
    if (this.perdio()) {
      console.log("Perdio la partida la palabra era: ", this.palabra)
    }

    return false;
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
    console.log(palabras.medio)
    const palabra = palabras.medio[Math.floor(Math.random() * palabras.medio.length)];

    return palabra;
  }

  elegirDificultad(dif){
    console.log(dif)
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
