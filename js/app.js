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
        
        for(var i=0; i<5; i++) {
            dice_points_table[i] = randomDice(i+1);
            
            if(dice_points_table[i] === 0) {
               dice_points_table[i] = temp_table[i];
            }
        }
        
        temp_table = dice_points_table.slice(0);
        console.log(dice_points_table);
        
        /*** if-s 1-6 table***/
        one_to_six(dice_points_table, $('#one'), 1);
        one_to_six(dice_points_table, $('#two'), 2);
        one_to_six(dice_points_table, $('#three'), 3);
        one_to_six(dice_points_table, $('#four'), 4);
        one_to_six(dice_points_table, $('#five'), 5);
        one_to_six(dice_points_table, $('#six'), 6);
        
        /*** if-s poker table ***/
        onePair(dice_points_table.slice(0), $('#onePair'));
        twoPairs(dice_points_table.slice(0), $('#twoPair'));
        same3(dice_points_table.slice(0), $('#same3'));
        same4(dice_points_table.slice(0), $('#same4'));
        same5(dice_points_table.slice(0), $('#same5'));
    });
}

/***** if - 5x *****/
function same5(points_table, element) {
    if(!element.hasClass('shadow')) {
        var span_element = element.find('span');
        var sum = 0;
        var sort_table = sort(points_table);
        
        for(var i=0; i<sort_table.length-4; i++) {
            if(sort_table[i] === sort_table[i+1] && 
               sort_table[i] === sort_table[i+2] && 
               sort_table[i] === sort_table[i+3] && 
               sort_table[i] === sort_table[i+4]) {
                    sum =  sort_table[i] + sort_table[i+1] + sort_table[i+2] + sort_table[i+3] + sort_table[i+4];
            }
        }
        
        console.log(sort_table);
        
        span_element.html(sum);
    }
}

/***** if - 4x *****/
function same4(points_table, element) {
    if(!element.hasClass('shadow')) {
        var span_element = element.find('span');
        var sum = 0;
        var sort_table = sort(points_table);
       
        for(var i=0; i<sort_table.length-3; i++) {
            if(sort_table[i] === sort_table[i+1] && 
               sort_table[i] === sort_table[i+2] && 
               sort_table[i] === sort_table[i+3]) {
                    sum =  sort_table[i] + sort_table[i+1] + sort_table[i+2] + sort_table[i+3];
            }
        }
      
        console.log(sort_table);
        
        span_element.html(sum);
    }
}

/***** if - 3x *****/
function same3(points_table, element) {
    if(!element.hasClass('shadow')) {
        var span_element = element.find('span');
        var sum = 0;
        var sort_table = sort(points_table);
        
        for(var i=0; i<sort_table.length-2; i++) {
            if(sort_table[i] === sort_table[i+1] && 
               sort_table[i] === sort_table[i+2]) {
                 sum =  sort_table[i] + sort_table[i+1] + sort_table[i+2];
            }
        }
        
        console.log(sort_table);
        
        span_element.html(sum);
    }
}

/***** if - two pairs *****/
function twoPairs(points_table, element) {
    if(!element.hasClass('shadow')) {
        var span_element = element.find('span');
        var sum = 0;
        var sort_table = sort(points_table);
        var are = false;
        
        for(var i=0; i<sort_table.length-1; i++) {
            if(sort_table[i] === sort_table[i+1]) {
                var temp1 = i;
                var temp2 = i+1;
                sum =  sort_table[i] + sort_table[i+1];
            }
        }
        
        sort_table[temp1] = 0;
        sort_table[temp2] = 0;
        sort(sort_table);
        
        for(var i=2; i<sort_table.length-1; i++) {
            if(sort_table[i] === sort_table[i+1]) {
                sum += sort_table[i] + sort_table[i+1];
                are = true;
            }
        }
        
        if(!are) sum = 0;
        span_element.html(sum);
    }
}

/***** if - one pair *****/
function onePair(points_table, element) {
    if(!element.hasClass('shadow')) {
        var span_element = element.find('span');
        var sum = 0;
        var sort_table = sort(points_table);
        
        for(var i=0; i<sort_table.length-1; i++) {
            if(sort_table[i] === sort_table[i+1])
                sum =  sort_table[i] + sort_table[i+1];
        }
        span_element.html(sum);
    }
}

/***** sort function *****/
function sort(table) {
    return table.sort(function(a, b){return a-b});
}

/***** if-s 1-6*****/
function one_to_six(points_table, element, points) {
    var span_element = element.find('span');
    var sum = 0;
    
    if(!element.hasClass('shadow')) {
        for(var i=0; i<points_table.length; i++) {
            if(points_table[i] === points) {
                sum += points;
            }    
        }
        span_element.html(sum);
    }
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
            
            if($(this).hasClass('upTable')) sum_1_6 += points_int;
            
            sum_all += points_int;
        }
        
        //console.log($(this).hasClass('shadow'));
    });
    
    if(sum_1_6  > 62) {
        sum_all += 50;
        $('#bonus_element').css('color', '#fff').find('span').html(50);
    }
    
    //console.log(sum_1_6);
    //console.log(sum_all);
    sum_1_6_element.html(sum_1_6);
    sum_all_element.html(sum_all);
}
