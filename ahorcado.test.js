const {adivinarPalabra, adivinarLetra, elegirPalabra, ocultarPalabra} = require('./ahorcado.js');


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
  //Arrange
  palabras = inicalizar();
  // Act 
  const resultado = elegirPalabra(palabras);

  // Assert
  expect(resultado).not.toBeNull();
  expect(resultado).not.toBeUndefined();
})

test("elegirPalabra no devuelve string vacío", () => {
  //Arrange
  palabras = inicalizar();
  // Act 
  const resultado = elegirPalabra(palabras);

  // Assert
  expect(resultado.length).toBeGreaterThan(0);
})

test("ocultarPalabra no oculta palabra", () => {
  //Arrange
  palabraOcultar = "perro"

  // Act 
  const resultado = mostrarPalabraOcculta(palabraOcultar);

  // Assert
  expect(resultado).not.toBeNull();
  expect(resultado).toContain("_");
})