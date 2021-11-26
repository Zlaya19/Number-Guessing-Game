let input = document.getElementById('input');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const inputDiv = document.getElementById('inputDiv');
let wrongNumber = document.getElementById('numberOfTries');

output.classList.add('classResult');
output.innerHTML = 'good luck!';

//  shows us how many times we have tried to find the number (line 22)
numberOfTries = 0;

//  Random number between 1 and 100
const randomNumb = Math.floor(Math.random() * 100);console.log(randomNumb);

button.addEventListener('click', () => {

    input = document.getElementById('input').value;
    output.classList.add('classResult');

    //  whenever the numbers do not match, we add +1 on numbersOfTries
    if(input !== randomNumb){
        numberOfTries++
        console.log(numberOfTries)
        wrongNumber.innerText = numberOfTries;
    };
    
    //  When the numbers match
    if(input == randomNumb){
        output.innerHTML = `You guessed the number after ${numberOfTries} tries`;
        inputDiv.classList.add('classDiv');
        inputDiv.innerHTML = 'Congratulations';
    }

    //  After ten tries the game is over
    if(numberOfTries == 10){
        output.remove();
        inputDiv.remove();
        container.classList.add('classDiv');
        container.innerHTML = 'You lost the game';
    }

    if(input < randomNumb){
        output.innerHTML = `The number you are looking for is greater then ${input}`;
    }
    if(input > randomNumb){
        output.innerHTML = `The number you are looking for is less then ${input}`;
    }

});