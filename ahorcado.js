class Ahorcado{ 
  constructor(palabra) {
    this.palabra = palabra;
    this.letrasAdivinadas = [];
    this.letrasFallidas = [];
    this.fallosRestantes = 6; 
    this.dificultad = "";
    this.arrayPalabras = this.palabra.split("");
  }
  adivinarLetra(letraAdivinada) {
  //Checkear si la letra está en alguno de los arreglos de letras adivinadas o fallidas
  if (this.palabra.includes(letraAdivinada)){
    //Agregar la letra en el array letrasAdivinadas
    return true;
  }
    //Agregar la letra en el array letrasFallidas
    //Restar un intento
    return false;
  //Checkear si ganó o no
  //Mostrar Palabra oculta e intentos restantes
}
} 

module.exports= Ahorcado;