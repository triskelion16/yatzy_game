$(document).ready(function() {
    
    roll();
 
    shadow_class_add();
    
});

/***** main roll *****/
function roll() {
    var dice_points_table = [];
    var temp_table = [];
    
    var roll_button = $('.main_button').find('button');
    roll_button.on('click', function() {
        
        for(var i=1; i<=5; i++) {
            dice_points_table[i] = randomDice(i);
            
            if(dice_points_table[i] === 0) {
               dice_points_table[i] = temp_table[i];
            }
        }
        
        temp_table = dice_points_table.slice(0);
        //console.log(dice_points_table);
        
        /*** if-s 1-6***/
        var points_ones = one_to_six(dice_points_table, $('#one').find('span'), 1);
        var points_twos = one_to_six(dice_points_table, $('#two').find('span'), 2);
        var points_threes = one_to_six(dice_points_table, $('#three').find('span'), 3);
        var points_fours = one_to_six(dice_points_table, $('#four').find('span'), 4);
        var points_fives = one_to_six(dice_points_table, $('#five').find('span'), 5);
        var points_sixs = one_to_six(dice_points_table, $('#six').find('span'), 6);
        
        console.log(points_ones+points_twos+points_threes+points_fours+points_fives+points_sixs);
    });
}

/***** if-s 1-6*****/
function one_to_six(points_table, element, points) {
    var sum = 0;
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === points) {
            sum += points;
        }    
    }
    element.html(sum);
    return sum;
}

/***** random dice *****/
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

/***** add shadow class *****/
function shadow_class_add(dice_all) {
    var dice = $('.main_dice').find('div');
    
    dice.on('click', function() {
        $(this).toggleClass('shadow_dice');
        console.log($(this));
    });
}