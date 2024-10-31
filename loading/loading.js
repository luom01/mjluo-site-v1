var sequence = document.querySelector('.sequence');

var phrases = ['please wait...', 
    'hold on...', 
    'just a moment...', 
    "we're working on it",
    'one more minute :)',
    'almost there...',
    'i need a second...',
    "why don't you take a seat?",
    "we're making progress..."];

var wordsIncrease = 0;

//for loop by set time out
//pass between 2 functions
//function call function to infinty loop
function showText(){
    sequence.innerText = phrases[wordsIncrease];
    sequence.style.opacity = 1;
    wordsIncrease++;
    setTimeout('hideText()', 7000);
}

function hideText(){
    if(wordsIncrease >= phrases.length){
        wordsIncrease = 0;
    }
    sequence.style.opacity = 0;
    setTimeout('showText()', 3000);
}

showText();