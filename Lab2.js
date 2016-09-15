var userChoice;
var compChoice;
var choices = ['Rock', 'Paper', 'Scissors'];
var compNum = Math.floor((Math.random() * 3));
var text;
userChoice = prompt('Please enter your choice(Rock, Paper, or Scissors): ');
switch(userChoice) {
    case "Rock":
        break;
    case "Paper":
        break;
    case "Scissors":
        break;
    default:
        text = "Not a valid input...";
        break;
}
compChoice = choices[compNum];
console.log('Your choice: ' + userChoice + '\nComputer Choice: ' + compChoice);
if(userChoice === compChoice){
    console.log('It was a tie');
}
else if(userChoice === 'Rock' && compChoice === 'Paper'){
    console.log('The Computer Wins');
}
else if(userChoice === 'Rock' && compChoice === 'Scissors'){
    console.log('You Win');
}
else if(userChoice === 'paper' && compChoice === 'Rock'){
    console.log('You Win');
}
else if(userChoice === 'Paper' && compChoice === 'Scissors'){
    console.log('The Computer Wins');
}
else if(userChoice === 'Scissors' && compChoice === 'Rock'){
    console.log('The Computer Wins');
}
else if(userChoice === 'Scissors' && compChoice === 'Paper'){
    console.log('You Win');
}