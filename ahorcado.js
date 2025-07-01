palabras = require('./palabras.js');

class Ahorcado {
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

}

// inicializar el juego
const juego = new Ahorcado("hola");

const palabraOcultaEl = document.getElementById("palabra-oculta");
const fallosEl = document.getElementById("fallos");
const letrasFallidasEl = document.getElementById("letras-fallidas");
const resultadoEl = document.getElementById("resultado");
const letraInput = document.getElementById("letra");
const adivinarBtn = document.getElementById("adivinar");

function actualizarVista() {
  palabraOcultaEl.textContent = juego.mostrarPalabraOculta();
  fallosEl.textContent = `Fallos restantes: ${juego.fallosRestantes}`;
  letrasFallidasEl.textContent = `Letras fallidas: ${juego.letrasFallidas.join(
    ", "
  )}`;
}

adivinarBtn.addEventListener("click", () => {
  const letra = letraInput.value.trim().toLowerCase();
  if (letra === "") {
    return;
  }
  juego.adivinarLetra(letra);
  actualizarVista();

  if (juego.gano()) {
    resultadoEl.textContent = "🎉 ¡Ganaste! La palabra era " + juego.palabra;
    adivinarBtn.disabled = true;
  } else if (juego.perdio()) {
    resultadoEl.textContent = "💀 Perdiste. La palabra era " + juego.palabra;
    adivinarBtn.disabled = true;
  }
  letraInput.value = "";
});

actualizarVista();

module.exports = Ahorcado;