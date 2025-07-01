const { adivinarPalabra, adivinarLetra } = require('./ahorcado.js');
const { palabras } = require('./palabras.js')

const Ahorcado = require('./ahorcado.js');


// TestAdivinarPalabra

// Arrange ,Act, Assert

test("adivinar una palabra", () => {
  // Arrange 
  palabraAadvinar = "pepe"
  palabraAdivinada = "pepe"

  // Act 
  const resultado = adivinarPalabra(palabraAadvinar, palabraAdivinada)

  // Assert
  expect(resultado).toBe(true);
})

// TestNoAdivinarPalabra
test("no adivinar palabra", () => {
  //Arrange
  palabraAdivinar = "pepe"
  palabraAdivinada = "pablo"

  // Act 
  const resultado = adivinarPalabra(palabraAdivinar, palabraAdivinada)

  // Assert
  expect(resultado).toBe(false);
})

// TestAdivinarLetra

test("adivinar letra", () => {
  //Arrange
  palabraAdivinar = "pepe"
  letraAdivinada = 'p'

  // Act 
  const resultado = adivinarLetra(palabraAdivinar, letraAdivinada)

  // Assert
  expect(resultado).toBe(true);
})

// TestNoAdivinarLetra

test("no adivinar letra", () => {
  //Arrange
  palabraAdivinar = "pepe"
  letraAdivinada = 'o'
  const juego = new Ahorcado(palabraAdivinar);

  // Act 
  juego.adivinarLetra(palabraAdivinar, letraAdivinada)

  // Assert
  expect(juego.letrasAdivinadas.length).toBe(1);
})

test("elegirPalabra no devueleve nulo o undefined", () => {

  // Act 

  console.log(palabras)
  const resultado = elegirPalabra(palabras);

  // Assert
  expect(resultado).not.toBeNull();
  expect(resultado).not.toBeUndefined();
})

test("elegirPalabra no devuelve string vacío", () => {
  // Act 
  const juego = new Ahorcado();

  const resultado = juego.elegirPalabra(palabras);

  // Assert
  expect(resultado.length).toBeGreaterThan(0);
})

test("mostrarPalabraOculta no oculta palabra", () => {
  //Arrange
  palabraOcultar = "perro"

  const juego = new Ahorcado(palabraOcultar);

  // Act 
  const resultado = juego.mostrarPalabraOculta(palabraOcultar);

  // Assert
  expect(resultado).not.toBeNull();
  expect(resultado).toContain("_");
})


test("mostrarPalabraOculta con guiones", () => {

  palabraOcultar = "gato";

  const juego = new Ahorcado(palabraOcultar);

  const resultado = juego.mostrarPalabraOculta(palabraOcultar);

  // Assert
  expect(resultado).toBe("_ _ _ _");
})

test('gana adivinando todas las letras', () => {
  const juego = new Ahorcado("hola");

  juego.adivinarLetra("h");
  juego.adivinarLetra("o");
  juego.adivinarLetra("l");
  juego.adivinarLetra("a");

  expect(juego.gano()).toBe(true);
  expect(juego.perdio()).toBe(false);
});
