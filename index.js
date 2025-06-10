function main(){
  palabras = incializar();
  palabra = elegirPalabra();
  mostrarPalabraOculta(palabra);
}

async function inicializar(){
  //Cargar banco de palabras
  try {
    const response = await fetch('palabras.json');
    datos = await response.json();
    palabras = datos|
    console.log(palabras);
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
  }

  //Cargar Dificultades
  
  return palabras;
}

function elegirPalabra(palabras){
  palabra = palabras.medio[Math.floor(Math.random() * palabras.medio.length)];
  return palabra;
}

function mostrarPalabraOculta(palabra) {
  return "_";
}