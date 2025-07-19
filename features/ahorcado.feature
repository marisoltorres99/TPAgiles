Feature: Jugar al ahorcado

  Scenario: Elegir dificultad y hacer un intento
    Given abro el juego
    When elijo la dificultad "facil"
    And escribo la letra "a"
    And presiono el botón Adivinar
    Then debería ver que se actualiza el estado del juego

