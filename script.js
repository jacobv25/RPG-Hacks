// Get the button element and result paragraph element
const generateBtn = document.getElementById('generate-btn');
const resultElem = document.getElementById('result');

// When the button is clicked, generate a random number between 1 and 6
generateBtn.addEventListener('click', function() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  resultElem.textContent = `You rolled a ${randomNum}!`;
});
