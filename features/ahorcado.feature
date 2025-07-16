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

Feature: Visualización inicial de la palabra a adivinar

  Scenario: Al iniciar el juego, la palabra se muestra con guiones bajos por cada letra
    Given el juego del ahorcado se ha iniciado
    When el jugador visualiza la palabra
    Then se deben mostrar guiones bajos representando cada letra de la palabra

Feature: Adivinar una letra incorrectamente

  Scenario: El jugador ingresa una letra que no está en la palabra
    Given el juego del ahorcado se ha iniciado con la palabra "gato"
    When el jugador ingresa la letra "z"
    Then se debe aumentar en uno el contador de errores
    And el dibujo del ahorcado debe actualizarse
    And la palabra debe seguir oculta con guiones bajos