import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser, page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 200 });
  page = await browser.newPage();
});

AfterAll(async () => {
  await browser.close();
});

Given('abro el juego', async () => {
  await page.goto('http://localhost:8000/frontend/');
});

When('elijo la dificultad {string}', async (dificultad) => {
  await page.click(`[data-dificultad="${dificultad}"]`);
});

When('escribo la letra {string}', async (letra) => {
  await page.fill('#letra', letra);
});

When('presiono el botón Adivinar', async () => {
  await page.click('#adivinar');
});

Then('debería ver que se actualiza el estado del juego', async () => {
  const fallos = await page.textContent('#fallos');
  if (!fallos.includes('Fallos restantes')) {
    throw new Error('No se actualizó el estado del juego');
  }
});
