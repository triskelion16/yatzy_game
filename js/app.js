$(document).ready(function() {
    var dice_points = [];
    var temp_table = [];
    /*var dice1_points;
    var dice2_points; 
    var dice3_points; 
    var dice4_points; 
    var dice5_points; */
    
    var roll_button = $('.main_button').find('button');
    roll_button.on('click', function() {
        
        for(var i=1; i<=5; i++) {
            dice_points[i] = randomDice(i);
            
            if(dice_points[i] === 0) {
               dice_points[i] = temp_table[i];
            }
            
        }
            console.log(dice_points);
            console.log(temp_table);
        
        /*dice1_points = randomDice(1);
        dice2_points = randomDice(2);
        dice3_points = randomDice(3);
        dice4_points = randomDice(4);
        dice5_points = randomDice(5);*/
        temp_table = dice_points.slice(0);
    });
 
    var dice_all = $('.main_dice');
    shadow_class_add(dice_all);
    
    //console.log(dice1_points + dice2_points + dice3_points + dice4_points + dice5_points);
});

function shadow_class_add(dice_all) {
    var dice = dice_all.find('div');
    
    dice.on('click', function() {
        $(this).toggleClass('shadow_dice');
        console.log($(this));
    });
}

function randomDice(id) {
    var dice = $('#dice' + id);
    
    if(!dice.hasClass('shadow_dice')) {
        var points = randomNumber();
        dice.removeClass();

        var showDice = 'showDice' + points;
        dice.addClass(showDice);
        return points;
    }
    else return 0;
}

function randomNumber() {
    var numberOfDice = Math.ceil(Math.random() * 6);
    return numberOfDice;
}