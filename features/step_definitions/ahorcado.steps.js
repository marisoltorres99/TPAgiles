import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import assert from 'assert';

let browser, page;

BeforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

AfterAll(async () => {
  await browser.close();
});

// Scenario: Elegir dificultad y hacer un intento
Given('abro el juego', async () => {
  await page.goto('http://localhost:8000/frontend/');
});

When('elijo la dificultad {string}', async (dificultad) => {
  // Esperar que el botón esté visible
  await page.waitForSelector(`[data-dificultad="${dificultad}"]`);
  // Botones con data-dificultad
  await page.click(`[data-dificultad="${dificultad}"]`);
  // Esperar que se muestre el div del juego (si aplica)
  await page.waitForSelector('#juego', { state: 'visible'});
});


When('escribo la letra {string}', async (letra) => {
  await page.fill('#letra', letra); 
});



When('presiono el botón Adivinar', async () => {
  await page.click('#adivinar');
   // Esperar un poco para que el DOM se actualice
  await page.waitForTimeout(200);
});

Then('debería ver que se actualiza el estado del juego', async () => {
  const fallosTexto = await page.textContent('#fallos');
   assert.ok(fallosTexto.includes('Fallos restantes'), 'El texto de fallos no se actualizó');
});




