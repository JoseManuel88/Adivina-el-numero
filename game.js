// Generar número aleatorio entre 1 y 100
let number = Math.floor(Math.random() * 10) + 1;

// Obtener elementos del DOM
const guessInput = document.getElementById('guess');
const submitButton = document.querySelector('input[type="submit"]');
const resultDiv = document.getElementById('result');

// Función que se ejecuta al enviar el formulario
function checkGuess() {
  // Obtener el valor del input y convertirlo a número
  const guess = parseInt(guessInput.value);

  // Comprobar si el número es correcto
  if (guess === number) {
    resultDiv.textContent = '¡Correcto! Has adivinado el número.';
    submitButton.disabled = true;
  } else if (guess < number) {
    resultDiv.textContent = 'El número es mayor.';
  } else {
    resultDiv.textContent = 'El número es menor.';
  }
}

// Asignar evento al formulario
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  checkGuess();
});
