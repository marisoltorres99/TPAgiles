import  { expect }  from 'expect'
import  Ahorcado  from "../frontend/ahorcado.js";

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

  expect(juego.adivinarLetra("a")).toBe('gano');
  expect(juego.gano()).toBe(true);
  expect(juego.perdio()).toBe(false);
});

test('pierde partida agotando los 6 intentos', () => {
  const juego = new Ahorcado("hola");

  juego.adivinarLetra("m");
  juego.adivinarLetra("k");
  juego.adivinarLetra("ñ");
  juego.adivinarLetra("p");
  juego.adivinarLetra("i");

  expect(juego.adivinarLetra("u")).toBe('perdio');
  expect(juego.perdio()).toBe(true);

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

test('Si la letra fue adivinada, mostratPalabraOculta deberia mostrar dicha letra', () => {
  const juego = new Ahorcado("palabra");

  juego.adivinarLetra("p"); //Adivinamos una letra

  const resultado = juego.mostrarPalabraOculta(); //llamo a la función
  
  expect(resultado).toContain("p");//Esperamos que contenga la letra
});

test("No debería permitir seguir adivinando letras después de ganar", () => {
  const juego = new Ahorcado("hola");

  juego.adivinarLetra("h");
  juego.adivinarLetra("o");
  juego.adivinarLetra("l");
  const resultadoGanar = juego.adivinarLetra("a"); 

  // Intenta adivinar otra letra cuando ya ganó
  const resultado = juego.adivinarLetra("z");

  //Verificamos que NO permite seguir jugando
  expect(resultado).toBe(""); 
});

test("No debería permitir seguir jugando después de perder", () => {
  const juego = new Ahorcado("hola");

  juego.adivinarLetra("x");
  juego.adivinarLetra("y");
  juego.adivinarLetra("z");
  juego.adivinarLetra("w");
  juego.adivinarLetra("q");
  juego.adivinarLetra("t"); // pierde

  const resultado = juego.adivinarLetra("h");
  expect(resultado).toBe(""); // o comportamiento esperado
});

test("fallosRestantes se reduce al fallar", () => {
  const juego = new Ahorcado("hola");

  juego.adivinarLetra("x");

  expect(juego.fallosRestantes).toBe(5);  
});

test("La misma letra no se guarda dos veces en letrasAdivinadas", () => {
  const juego = new Ahorcado("perro");

  juego.adivinarLetra("p");
  juego.adivinarLetra("p");

  expect(juego.letrasAdivinadas.filter(l => l === "p").length).toBe(1);
});

test("Ingreso de letra no válida no debería modificar estado del juego", () => {
  const juego = new Ahorcado("gato");

  const resultado = juego.adivinarLetra("1"); // o algún símbolo
  expect(resultado).toBe(""); 
});