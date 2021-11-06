let input = document.getElementById('input');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const inputDiv = document.getElementById('inputDiv');

const randomNumb = Math.floor(Math.random() * 100);console.log(randomNumb);

button.addEventListener('click', () => {

    input = document.getElementById('input').value;
    output.classList.add('classResult');
    
    if(input == randomNumb){
        output.innerHTML = 'You guessed the number';
        inputDiv.classList.add('classDiv');
        inputDiv.innerHTML = 'Congratulations';
        output.innerHTML = 'You win';
    }

    if(input < randomNumb){
        output.innerHTML = 'The number you are looking for is greater ' + `${input}`;
    }
    if(input > randomNumb){
        output.innerHTML = 'The number you are looking for is less then ' + `${input}`;
    }

    /* if(randomNumb - input < 10 && randomNumb - input > -10){
        output.innerHTML = 'hot';
        output.style.color = '#C12B1A';
    } */

});