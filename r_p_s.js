const getUserChoice = (userInput) => {
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput.toLowerCase();
  } else {
    console.log = ("wtf .... ")
  }
};



function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) ;
  	switch (randomNumber) {
      case 0:
        return 'rock'
        break;
      case 1:
        return 'paper'
        break;
      case 2: 
        return 'scissors' 
        break;
      default:
        console.log = '';
  	}
}
        
function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie game';
 	}  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Tough luck!';
		 } else {
      return 'Winner winner chicker dinner!'
    }
  } 
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Tough luck!';
    } else {
      return 'Winner winner chicken dinner!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') { 
      return 'Tough Luck!';
    } else {
      return 'Winner winner chicken dinner!';
  }
 }
}
        
const playGame = () =>  {
// in this excercise you input the user's guess.
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(computerChoice, userChoice));
}

playGame()
