// == , ===
function adivinarPalabra(palabraAadvinar,palabraAdivinada) {
  if (palabraAadvinar === palabraAdivinada) {
      return true;
  } 
  return false;
}

function adivinarLetra(palabraAadvinar, letraAdivinada) {
  if (palabraAadvinar.includes(letraAdivinada)){
    return true;
  }
    return false;
}
// TODO: Hacer banco de palabras 
// TODO: Seleccionar una palabra aleatoria 
function elegirPalabra(){
  return "Arboleda";
}

// PEPE
// ****
function ocultarPalabra(palabra) {
  return "_";
}



// Seleccionar de un banco de palabras, una palabra. 
// Ocultar palabra al usuario



module.exports = {adivinarPalabra, adivinarLetra, elegirPalabra, ocultarPalabra};
