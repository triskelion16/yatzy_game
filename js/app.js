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
        
        //console.log(points_ones+points_twos+points_threes+points_fours+points_fives+points_sixs);
    });
}

/***** if-s 1-6*****/
function one_to_six(points_table, element, points) {
    var sum = 0;
    
    if(!element.parent().parent().hasClass('shadow')) {
        for(var i=1; i<points_table.length; i++) {
            if(points_table[i] === points) {
                sum += points;
            }    
        }
        element.html(sum);
    }
    //return sum;
}

/***** random dice *****/
function randomDice(id) {
    var dice = $('#dice' + id);
    
    if(!dice.hasClass('shadow')) {
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
function shadow_class_add() {
    var dice = $('.main_dice').find('div');
    var table_elements = $('table').find('tr');
    var shadow = 'shadow';
    
    /* dice */
    dice.on('click', function() {
        $(this).toggleClass(shadow);
        console.log($(this));
    });
    
    /* table elements */
    table_elements.on('mouseenter', function() {
        if(!$(this).hasClass('without')) {
           $(this).css('background-color', 'rgba(255,255,255, .2)'); 
        }
    });
    
    table_elements.on('mouseleave', function() {
        if(!$(this).hasClass('shadow') || $(this).hasClass('without')) {
           $(this).css('background-color', 'rgba(0,0,0, 0)'); 
        }
    });
    
    table_elements.one('click', function() {
        if(!$(this).hasClass('without')) {
            $(this).addClass(shadow);
            
            sum(table_elements);
        }
    });
}

function sum(table_elements) {
    var sum_all_element = $('#sum_all').find('span');
    var sum_all = 0;
    var sum_1_6_element = $('#sum1_6').find('span');
    var sum_1_6 = 0;
    
    table_elements.each(function(index, value) {
        if($(this).hasClass('shadow')) {
            var points_text = '';
            points_text = $(this).find('span').html();
            var points_int = parseInt(points_text, 10);
            
            sum_1_6 += points_int;
            
            sum_all = sum_1_6;
        }
        
        //console.log($(this).hasClass('shadow'));
    });
    
    if(sum_1_6  > 62) {
        sum_all += 50;
        $('#bonus_element').css('color', '#fff').find('span').html(50);
    }
    
    console.log(sum_1_6);
    console.log(sum_all);
    sum_1_6_element.html(sum_1_6);
    sum_all_element.html(sum_all);
}
