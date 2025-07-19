Feature: Jugar al ahorcado

  Scenario: Elegir dificultad y hacer un intento
    Given abro el juego
    When elijo la dificultad "facil"
    And escribo la letra "a"
    And presiono el botón Adivinar
    Then debería ver que se actualiza el estado del juego


 Scenario: Ganar el juego adivinando todas las letras
    Given abro el juego
    When elijo la dificultad "facil"
    And adivino todas las letras de la palabra correctamente
    Then debería mostrarse el mensaje "¡Ganaste!"