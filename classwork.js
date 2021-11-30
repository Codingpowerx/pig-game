

var scores, roundScore, activePlayer, gamePlaying;
init();

var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        //1. we want a random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //.2 display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'images/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'images/dice-' + dice2 + '.png';


         //3. upadte the round score if the rolled number was not a 1.
         if(dice1 !== 1 && dice2 !== 1){
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;

        } else{
            // next player
            nextPlayer();

        }    

        /** 
        //3. upadte the round score if the rolled number was not a 1.
        if(dice === 6 && lastDice === 6){
            //player looses his scores
            scores[activePlayer] = 0;
            document.getElementById('score--' + activePlayer).textContent = '0'; 
            nextPlayer();
        }else if(dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;

        } else{
            // next player
            nextPlayer();

            //document.querySelector('.player--0').classList.remove('player--active')
            //document.querySelector('.player--1').classList.add('player--active')

        }

        lastDice = dice;
        */

    }
    
    
} );

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //update the UI
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        //adding the input field from the browser
        var input = document.querySelector('.final-score').value;
        
        var winningScore;

        if(input){
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //check if a player won the game
        if (scores[activePlayer] >= winningScore){
            document.getElementById('name--' + activePlayer).textContent = 'winner!';

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player--' + activePlayer ).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer ).classList.remove('player--active');

            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
    

});

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'player 1';
    document.getElementById('name--1').textContent = 'player 2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');

    document.querySelector('.player--0').classList.add('player--active');
    
}



function nextPlayer(){
     // next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current--0').textContent = '0';
     document.getElementById('current--1').textContent = '0';

     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';

     document.querySelector('.player--0').classList.toggle('player--active')
     document.querySelector('.player--1').classList.toggle('player--active')
}






















// document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score--0').textContent;
//console.log(x);
