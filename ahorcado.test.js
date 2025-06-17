const {adivinarPalabra, adivinarLetra} = require('./ahorcado.js');
const { palabras } = require('./palabras.js')

const {elegirPalabra, mostrarPalabraOculta} = require('./index.js')

// TestAdivinarPalabra

// Arrange ,Act, Assert

test("adivinar una palabra", () => {
  // Arrange 
  palabraAadvinar = "pepe"
  palabraAdivinada = "pepe"

  // Act 
  const resultado = adivinarPalabra(palabraAadvinar,palabraAdivinada) 

  // Assert
  expect(resultado).toBe(true);
})

// TestNoAdivinarPalabra
test("no adivinar palabra", () => {
  //Arrange
  palabraAdivinar = "pepe"
  palabraAdivinada = "pablo"

  // Act 
  const resultado = adivinarPalabra(palabraAdivinar,palabraAdivinada) 

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

  // Act 
  const resultado = adivinarLetra(palabraAdivinar, letraAdivinada)

  // Assert
  expect(resultado).toBe(false);
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
  const resultado = elegirPalabra(palabras);

  // Assert
  expect(resultado.length).toBeGreaterThan(0);
})

test("mostrarPalabraOculta no oculta palabra", () => {
  //Arrange
  palabraOcultar = "perro"

  // Act 
  const resultado = mostrarPalabraOculta(palabraOcultar);

  // Assert
  expect(resultado).not.toBeNull();
  expect(resultado).toContain("_");
})

test("mostrarPalabraOculta oculta palabra", () => {
  //Arrange
  palabraOcultar = "perro"

  // Act 
  const resultado = mostrarPalabraOculta(palabraOcultar);

  // Assert
  expect(resultado).toBe("_ _ _ _ _");
})

test("mostrarPalabraOculta con guiones", () => {
  //Arrange
  palabraOcultar = "gato";

  // Act 
  const resultado = mostrarPalabraOculta(palabraOcultar);

  // Assert
  expect(resultado).toBe("_ _ _ _");
})
