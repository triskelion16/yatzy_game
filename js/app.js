$(document).ready(function() {
    
    var roll = $('.main_button').find('button');
    roll.on('click', function() {
        randomDice();
    });
 
    
    
});

function randomDice() {
    var box = $('.main_dice').find('div');
    var showDice = 'showDice';
    
    box.addClass(showDice + randomNumber());
    
    console.log(showDice + randomNumber());
}

function randomNumber() {
    var numberOfDice = Math.ceil(Math.random() * 6);
    return numberOfDice;
}