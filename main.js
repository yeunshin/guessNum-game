const randomNum = getRandomInt(1,100);
console.log(`Answer: ${randomNum}`);

let turn = 1;
//console.log(`You are in ${turn}st Turn` );

let submitBtn = document.querySelector("#submitBtn");


let reStartBtn = document.querySelector("#reStartBtn");
//reStartBtn.addEventListener('click', startGame)

let history = document.querySelector('#history');

let array = [];

let guessedVal = document.querySelector('#guessNum');

let result = document.querySelector('#result');

let hint = document.querySelector('#hint');


//while ( turn < 10 ){
    //turn++;
    //console.log(turn)
//}

submitBtn.addEventListener('click', () => {
    //console.log(guessedVal.value);
    array.push(guessedVal.value);
    console.log(array);
    history.innerHTML = array;
    readValue();
})

/*function startGame(){
    //1. set random number
    //2. while turn <= 10,
    //   let player guess number(getting user's input),
    //   if guessed number == set number
    //      player won! & game done(restart Btn)
    //      
}   //3. player lost! & game done(restart Btn)
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function readValue () {
    if (guessedVal.value == randomNum) {
        console.log('correct')
        result.innerHTML = 'correct!';
        hint.innerHTML ='Congratulations! You got it right!';
    }
    else {
        console.log('wrong');
        result.innerHTML = 'wrong!';

        if(guessedVal.value > randomNum){
            hint.innerHTML = 'Last guess was too high!'
        }else{
            hint.innerHTML = 'Last guess was too low!'
        }
        }
}

