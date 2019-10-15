
// ##### FORKAN UDDIN #####

var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var resetButton = document.querySelector('#reset');
var scoreInput = document.querySelector('#wsinput'); 
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var p1ScoreDisplay = document.querySelector('#p1Display');
var p2ScoreDisplay = document.querySelector('#p2Display');
var winningScoreDisplay = document.querySelector('#winning-score');
var winningScore = 10;

// ##### FORKAN UDDIN #####
p1Button.addEventListener('click', function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
            document.querySelector('h1').textContent = 'Player 1 is the WINNER';
            document.querySelector('h1').classList.add('winner-text');
        }
        p1ScoreDisplay.textContent = p1Score;
    }
    
})
p2Button.addEventListener('click', function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            gameOver = true;
            document.querySelector('h1').textContent = 'Player 2 is the WINNER';
            document.querySelector('h1').classList.add('winner-text');
        }
        p2ScoreDisplay.textContent = p2Score;
    }
    
})
scoreInput.addEventListener('change', function(){
    winningScore = Number(scoreInput.value);
    winningScoreDisplay.textContent = Number(scoreInput.value);
    p1Score= 0;
    p1ScoreDisplay.textContent = 0;
    p2Score = 0;
    p2ScoreDisplay.textContent = 0;
})
resetButton.addEventListener('click', function(){
    location.reload(true);
})


// ##### FORKAN UDDIN #####