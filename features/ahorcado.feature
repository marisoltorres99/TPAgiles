Feature: Jugar al ahorcado

  Scenario: Elegir dificultad y hacer un intento
    Given abro el juego
    When elijo la dificultad "facil"
    And escribo la letra "a"
    And presiono el botón Adivinar
    Then debería ver que se actualiza el estado del juego
  
  Scenario: Mostrar palabra oculta al iniciar el juego
    Given abro el juego
    When elijo la dificultad "medio"
    Then debería ver la palabra oculta en pantalla

