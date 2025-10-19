const maxRangeInput = document.getElementById('max-range');
const userInput = document.getElementById('guess');
const playButton = document.getElementById('play-button');
const resultGame = document.getElementById('result');

function playGame(event) {
  event.preventDefault();
  const maxRangeNumber = parseInt(maxRangeInput.value, 10);
  const userGuessNumber = parseInt(userInput.value, 10);
  const randomNumber = Math.ceil(Math.random() * maxRangeNumber);
  let resultText;

  if (userGuessNumber === randomNumber) {
    resultText = 'You Win!';
  } else {
    resultText = 'You Lost!';
  }
  resultGame.innerHTML = `You chose: ${userGuessNumber}, the machine chose: ${randomNumber} <br> ${resultText}`;
}

playButton.addEventListener('click', playGame);
