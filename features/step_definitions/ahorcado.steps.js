const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const Ahorcado = require('../../ahorcado');

let juego;

Given('la palabra secreta es {string}', function (palabra) {
  juego = new Ahorcado(palabra);
});

When('el usuario intenta con la letra {string}', function (letra) {
  juego.adivinarLetra(letra);
});


Then('el usuario debería ganar el juego', function () {
  assert.strictEqual(juego.gano(), true);
});


