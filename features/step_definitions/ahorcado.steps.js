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
  await page.goto('http://localhost:5500/frontend/');
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

// Scenario: Ganer el juego adivinando todas las letras
When('adivino todas las letras de la palabra correctamente', async () => {
  // Obtener la palabra original desde un atributo expuesto (data-original)
  const palabraOriginal = await page.evaluate(() => {
    const el = document.querySelector('#palabra');
    return el?.dataset?.original || '';
  });

  if (!palabraOriginal) {
    throw new Error('No se pudo obtener la palabra original desde el DOM.');
  }

  const letrasUnicas = [...new Set(palabraOriginal.toLowerCase().replace(/[^a-záéíóúüñ]/g, ''))];

  for (const letra of letrasUnicas) {
    await page.fill('#letra', letra);
    await page.click('#adivinar');
    await page.waitForTimeout(200); // Esperar entre letras
  }
});

Then('debería mostrarse el mensaje {string}', async (mensajeEsperado) => {
  const texto = await page.textContent('#mensaje');
  assert.ok(texto?.toLowerCase().includes(mensajeEsperado.toLowerCase()), `No se encontró el mensaje "${mensajeEsperado}". Se obtuvo: "${texto}"`);
});

// Scenario: Ingresar una letra correcta en dificultad media
//Then('la letra {string} debería aparecer en la palabra ', async (letra) => {
//  
//  const contenido = await page.textContent('#palabra-oculta');
//  const letrasMostradas = contenido.replace(/\s/g, '').toLowerCase();
  // La letra debe estar en la palabra mostrada solo si está en la palabra original
  // Para el test, verificamos que si la letra está en la palabra oculta (ya que la palabra cambia)
//  assert.ok(letrasMostradas.includes(letra.toLowerCase()), `La letra ${letra} no apareció en la palabra mostrada`);
// });