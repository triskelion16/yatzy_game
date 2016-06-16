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
        var points_ones = ones(dice_points_table);
        var points_twos = twos(dice_points_table);
        var points_threes = threes(dice_points_table);
        var points_fours = fours(dice_points_table);
        var points_fives = fives(dice_points_table);
        var points_sixs = sixs(dice_points_table);
        
        console.log(points_ones+points_twos+points_threes+points_fours+points_fives+points_sixs);
    });
}

/***** if-s 1-6*****/

function ones(points_table) {
    var sum = 0;
    var one_element = $('#one').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 1) {
            sum += 1;
        }    
    }
    one_element.html(sum);
    return sum;
}

function twos(points_table) {
    var sum = 0;
    var two_element = $('#two').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 2) {
            sum += 2;
        }    
        two_element.html(sum);
    }
    return sum;
}

function threes(points_table) {
    var sum = 0;
    var three_element = $('#three').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 3) {
            sum += 3;
        }    
        three_element.html(sum);
    }
    return sum;
}

function fours(points_table) {
    var sum = 0;
    var four_element = $('#four').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 4) {
            sum += 4;
        }    
        four_element.html(sum);
    }
    return sum;
}

function fives(points_table) {
    var sum = 0;
    var five_element = $('#five').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 5) {
            sum += 5;
        }    
        five_element.html(sum);
    }
    return sum;
}

function sixs(points_table) {
    var sum = 0;
    var six_element = $('#six').find('span');
    
    for(var i=1; i<points_table.length; i++) {
        if(points_table[i] === 6) {
            sum += 6;
        }    
        six_element.html(sum);
    }
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