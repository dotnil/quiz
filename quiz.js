const guessedNumber = Math.floor(Math.random() * 100) + 1
const input = document.querySelector('.quiz__form--field')
let iterations = 10

function outputResult(message) {
  const resultNode = document.querySelector('.quiz__result')
  resultNode.innerText = message
}

function guessOnEnter(event) {
  if (event.key === "Enter") {
    guessNumber(input.value)
  }
}

function guessNumber(number) {
  if (iterations == 0) {
    return outputResult('🐤  zero iteration left')
  }

  iterations--
  input.focus()

  if (number == guessedNumber) {
    return outputResult('Winner! 🦙')
  }

  if (number < guessedNumber) {
    return outputResult('Guessed number is bigger')
  }

  outputResult('Guessed number is less')
}

document.querySelector(".quiz__form--submit").addEventListener("click", () => {
  guessNumber(input.value)
})

window.addEventListener("keydown", guessOnEnter)
