# Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## My Project Solutions

## Guess The Number Project Solution

```javascript
const form = document.querySelector('.form');
const guessedNumList = [];
const randomNum = Math.round(Math.random() * 100 + 1);
console.log(randomNum);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const guessedNumber = parseInt(
    document.getElementsByClassName('guessField')[0].value //getElementsByClassName returns HTMLCollection
  );

  const displayResult = document.getElementsByClassName('lowOrHi')[0];
  if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
    displayResult.innerText = 'Please guess valid number';
  } else {
    const previousGuesses = document.querySelector('.guesses');
    let guessRemaining = parseInt(
      document.querySelector('.lastResult').innerText
    );
    const guessRemainingElement = document.querySelector('.lastResult');
    displayResult.innerText = '';
    if (guessedNumber === randomNum) {
      displayResult.innerText = 'You guessed it right!🎊🎊';
      guessedNumList.push(guessedNumber);
      previousGuesses.innerText = guessedNumList;
      guessRemaining--;
      guessRemainingElement.innerText = guessRemaining;
    } else {
      if (guessRemaining > 0) {
        guessedNumList.push(guessedNumber);
        previousGuesses.innerText = guessedNumList;
        guessRemaining--;
        guessRemainingElement.innerText = guessRemaining;
      } else {
        displayResult.innerText =
          'You have exhausted all attempts. Please Reload the page';
      }
    }
  }
});


```

