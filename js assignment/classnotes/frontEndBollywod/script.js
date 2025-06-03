// javascript code goes here
const actualWord = "actor"
const letterNodes = document.getElementsByClassName('letter')
//console.log(letterNodes)
let currentPosition = 0;
let guesses =5;

document.body.addEventListener('keydown', function(event){
    const currrentLetter = event.key
    if(actualWord[currentPosition] === currrentLetter){
        letterNodes[currentPosition].innerText = currrentLetter;
        currentPosition += 1;
        if(currentPosition === 5){
            alert(`Congratulations!`)
           return;
        } 
    }else{
        guesses -= 1
        document.getElementById('guesses').innerText = `Chances Left : ${guesses}`
        if(guesses === 0){
            alert("You've run out of guesses! Game over!")
            document.getElementById('answer').innerText = `Answer is ${actualWord}`;
            return;
        }else{
            alert(`Wrong guess! ${guesses} guesses remaining.`)
        }
        
    }
})