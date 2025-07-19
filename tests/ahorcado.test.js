import  { expect }  from 'expect'
import  Ahorcado  from "../frontend/ahorcado.js";


// TestAdivinarPalabra

// Arrange ,Act, Assert

// test("adivinar una palabra", () => {
//   // Arrange 
//   palabraAadvinar = "pepe"
//   palabraAdivinada = "pepe"

//   // Act 

//   const juego = new Ahorcado(palabraAadvinar);


//   const resultado = juego.gano(palabraAadvinar, palabraAdivinada)

//   // Assert
//   expect(resultado).toBe(true);
// })

// TestNoAdivinarPalabra
// test("no adivinar palabra", () => {
//   //Arrange
//   palabraAdivinar = "pepe"
//   palabraAdivinada = "pablo"

//   // Act 
//   const resultado = adivinarPalabra(palabraAdivinar, palabraAdivinada)

//   // Assert
//   expect(resultado).toBe(false);
// })

// TestAdivinarLetra

test("adivinar letra", () => {
  const palabraAdivinar = "pepe"
  const letraAdivinada = 'p'

  const juego = new Ahorcado(palabraAdivinar);

  juego.adivinarLetra(letraAdivinada)

  expect(juego.letrasAdivinadas.includes(letraAdivinada)).toBe(true);
})


test("no adivinar letra", () => {
  const palabraAdivinar = "pepe"
  const letraAdivinada = 'o'
  const juego = new Ahorcado(palabraAdivinar);

  juego.adivinarLetra(letraAdivinada)

  expect(juego.letrasFallidas.includes(letraAdivinada)).toBe(true);
})

test("elegirPalabra no devueleve nulo o undefined", () => {

  const juego = new Ahorcado();

  const resultado = juego.elegirPalabra();

  expect(resultado).not.toBeNull();
  expect(resultado).not.toBeUndefined();
})

test("elegirPalabra no devuelve string vacío", () => {
  const juego = new Ahorcado();

  const resultado = juego.elegirPalabra();


  expect(resultado.length).toBeGreaterThan(0);
})

test("mostrarPalabraOculta no oculta palabra", () => {
  
  const palabraOcultar = "perro"

  const juego = new Ahorcado(palabraOcultar);

  const resultado = juego.mostrarPalabraOculta(palabraOcultar);

  expect(resultado).not.toBeNull();
  expect(resultado).toContain("_");
})


test("mostrarPalabraOculta con guiones", () => {

  const palabraOcultar = "gato";

  const juego = new Ahorcado(palabraOcultar);

  const resultado = juego.mostrarPalabraOculta(palabraOcultar);

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

test("descubre todas las posiciones de una letra repetida", () => {
  const juego = new Ahorcado("pepe");

  juego.adivinarLetra("p");

  expect(juego.palabraMostrada).toBe("p_p_");  
});


test("Dificultad válida", () => {
  const juego = new Ahorcado();

  juego.elegirDificultad("facil");

  expect(juego.dificultad).toBe("facil");  
});

test("Dificultad no válida (medio por defecto)", () => {
  const juego = new Ahorcado();

  juego.elegirDificultad("experto");

  expect(juego.dificultad).toBe("medio");  
});

test("Cuando una letra ya fue ingresada, debería devolver un string vacío", () => {
  const juego = new Ahorcado("palabra");

  juego.adivinarLetra("a"); // Primera vez
  const resultado = juego.adivinarLetra("a"); // Segunda vez

  expect(resultado).toBe(""); // Esperamos string vacío
});