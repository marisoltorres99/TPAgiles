
import Ahorcado from "../ahorcado.js";


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

