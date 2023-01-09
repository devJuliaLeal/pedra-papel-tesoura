const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 
let computerChoice
let result


possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
   userChoice= e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoise()
   getResult()
}))

function generateComputerChoise(){
   const randomNumber = Math.floor(Math.random()*3)  + 1 //or You can use possibleChoices.length
  if (randomNumber ===1){
   computerChoice ='pedra'
  }
  if (randomNumber ===2){
   computerChoice ='tesoura'
  }
  if (randomNumber ===3){
   computerChoice ='papel'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
   if (computerChoice === userChoice){
      result = 'Empate!'
   }
   if (computerChoice === 'pedra' && userChoice=== "papel"){
      result = 'Você venceu!'
   }
   if (computerChoice === 'pedra' && userChoice=== "tesoura"){
      result = 'Você perdeu!'
   }
   if (computerChoice === 'papel' && userChoice=== "tesoura"){
      result = 'Você venceu!'
   }
   if (computerChoice === 'papel' && userChoice=== "pedra"){
      result = 'Você perdeu!'

   }
 if (computerChoice === 'tesoura' && userChoice=== "pedra"){
      result = 'Você venceu!'
      
   }
   if (computerChoice === 'tesoura' && userChoice=== "papel"){
      result = 'Você perdeu!'
      
   }
resultDisplay.innerHTML = result

}