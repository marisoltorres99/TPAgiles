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


module.exports = {adivinarPalabra, adivinarLetra};
