let palabras;

function main(){
  incializar();
  palabra = elegirPalbra();
  mostrarPalabraOculta(palabra);
}

async function inicializar(){
  //Cargar banco de palabras
  try {
    const response = await fetch('palabras.json');
    datos = await response.json();
    palabras = datos|
    consele.log(palabras);
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
  }

  //Cargar Dificultades
}

function elegirPalabra(){
  return;
}

function mostrarPalabraOculta(palabra) {
  return "_";
}