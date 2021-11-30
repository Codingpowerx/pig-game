

var scores, roundScore, activePlayer, gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        //1. we want a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //.2 display the result
        var diceDom =  document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'images/dice-' + dice + '.png';

        //3. upadte the round score if the rolled number was not a 1.
        if(dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;

        } else{
            // next player
            nextPlayer();

            //document.querySelector('.player--0').classList.remove('player--active')
            //document.querySelector('.player--1').classList.add('player--active')

        }

    }
    
    
} );

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
        //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //update the UI
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        //check if a player won the game
        if (scores[activePlayer] >= 100){
            document.getElementById('name--' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
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

    document.querySelector('.dice').style.display = 'none';

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

     document.querySelector('.dice').style.display = 'none';

     document.querySelector('.player--0').classList.toggle('player--active')
     document.querySelector('.player--1').classList.toggle('player--active')
}

























// document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score--0').textContent;
//console.log(x);
