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



// Seleccionar de un banco de palabras, una palabra. 
// Ocultar palabra al usuario



module.exports = {adivinarPalabra, adivinarLetra};
