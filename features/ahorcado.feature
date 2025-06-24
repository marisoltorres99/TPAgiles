Feature: Juego del Ahorcado

  Scenario: El usuario adivina correctamente la palabra
    Given la palabra secreta es "gato"
    And el usuario intenta con la letra "g"
    And el usuario intenta con la letra "a"
    And el usuario intenta con la letra "t"
    And el usuario intenta con la letra "o"
    Then el usuario debería ganar el juego

  Scenario: El usuario pierde por demasiados intentos incorrectos
    Given la palabra secreta es "perro"
    And el usuario intenta con la letra "x"
    And el usuario intenta con la letra "z"
    And el usuario intenta con la letra "q"
    And el usuario intenta con la letra "w"
    And el usuario intenta con la letra "u"
    And el usuario intenta con la letra "i"
    Then el usuario debería perder el juego
