
import Ahorcado from "../ahorcado.js";


var juego = null;
const palabraOcultaEl = document.getElementById("palabra-oculta");
const fallosEl = document.getElementById("fallos");
const letrasFallidasEl = document.getElementById("letras-fallidas");
const resultadoEl = document.getElementById("resultado");
const letraInput = document.getElementById("letra");
const adivinarBtn = document.getElementById("adivinar");
const botonesDificultad = document.querySelectorAll('.btn-dificultad');


botonesDificultad.forEach(boton => {
    boton.addEventListener('click', () => {
        const dificultad = boton.getAttribute('data-dificultad');
        console.log('Dificultad elegida:', dificultad);

        document.getElementById('juego').style.display = 'block';

        document.getElementById('dificultad-container').style.display = 'none';

        ComenzarJuego(dificultad);
    });
});

function ComenzarJuego(dificultad){
    juego = new Ahorcado(undefined,dificultad);
    actualizarVista();
}

function actualizarVista() {
    palabraOcultaEl.textContent = juego.mostrarPalabraOculta();
    fallosEl.textContent = `Fallos restantes: ${juego.fallosRestantes}`;
    letrasFallidasEl.textContent = `Letras fallidas: ${juego.letrasFallidas.join(
        ", "
    )}`;
    actualizarImagenAhorcado(juego.fallosRestantes);

}

function actualizarImagenAhorcado(fallosRestantes) {
    const img = document.getElementById('imagen-ahorcado');
    const indice = 6 - fallosRestantes; 
    img.src = `../img/el-ahorcado${indice}.png`;
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

