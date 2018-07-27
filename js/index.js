//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var count = 1;
var current_fs = $('.visible');
var base_question = $('.first_question');

var schema_parts = $(".schema_parts");
var variants = $('.variants_text');
var types = $('.type__card');
var colors = $('.color__card');

$(".variants_text").on("click", function(e) {
	var number = variants.index(this);

	$(schema_parts).each(function() {
	if ($(this).hasClass("displayed")) {
		$(this).removeClass("displayed");
		}
    });
		$(variants).each(function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		}
});
	$(variants[number]).addClass("active");
	$(schema_parts[number]).addClass("displayed");
	var square=e.target.innerText;
    document.getElementById('square').value = square; 
});



$(".type__card").on("click", function(e) {
	var number_type = types.index(this);

	$(types).each(function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		}
    });
	
	$(types[number_type]).addClass("active");
	// var price =	types[number_type].innerText;
	var price =$(types[number_type]).find('.price').text();

	console.log(price);	
    document.getElementById('type').value = price; 
});

$(".color__card").on("click", function(e) {
	var number_colors = colors.index(this);

	$(colors).each(function() {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		}
    });	
	$(colors[number_colors]).addClass("active");
	// var price =	types[number_type].innerText;
	var color =$(colors[number_colors]).find('.color').text();

	console.log(color);	
    document.getElementById('type').value = color; 
});


$(".sms").on("click", function(e) {
document.getElementById('social').value = 'cмс'; 
});

$(".telegram").on("click", function(e) {
document.getElementById('social').value = 'Telegram'; 
});
$(".viber").on("click", function(e) {
document.getElementById('social').value = 'Viber'; 
});
$(".watsap").on("click", function(e) {
document.getElementById('social').value = 'Watsap'; 
});


$('.next').click(function(){ 
var next_fs = current_fs.next();
$(current_fs).removeClass('visible');
next_fs.addClass('visible');
count++;
if (count>1){ 
$('.count').css('opacity', '0'); 
}    
current_fs = next_fs;
});   


$(".back").click(function(){
var previous_fs = $(current_fs).prev();
$(current_fs).removeClass('visible');
previous_fs.addClass('visible');
current_fs.hide('slow');     
previous_fs.fadeIn(1000);
current_fs = previous_fs;
count--;
});




$('.nav-tabs').click(function(e){	
	var link =e.target;
	console.log(link);
	$(link).addClass('active');
});




$('.nav-tabs').click(function(e){
	var closed_tab =$('.closed_tab');
	var opened_tab =$('.opened_tab');
	closed_tab.css('display', 'inline-block');
	opened_tab.css('display', 'none');
	var tab = $(e.target).find('.closed_tab');
	var tab2 = $(e.target).find('.opened_tab');
    tab.css('display', 'none');
    tab2.css('display', 'inline-block');
});



// $('#send').click(function(){
// var form = $('#msform');
// form.find('.compulsory').addClass('empty_field');

// form.find('.compulsory').each(function(){
// if($(this).val() != ''){
// $(this).removeClass('empty_field');
// } else {
// $(this).addClass('empty_field');        
// }
// var sizeEmpty = form.find('.empty_field').size(); 

// if(sizeEmpty > 0){
// form.find('.empty_field').css({'border-color':'#d8512d'});

// return false;
// }    	
// });
// });

$(document).ready(function(){
$('.get_offer').click( function(){ 
var scroll_el = $(this).attr('href'); 
if ($(scroll_el).length != 0) { 
$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // 
}
return false; 
});
});

$(function() {
    $(".orders__inputs.phone").mask("+7(999) 999-99-99");
});

$('.square__test').click( function(e){ 
document.getElementById('square_mobile').value = $(this).text();
 var next_fs = current_fs.next();
$(current_fs).removeClass('visible');
next_fs.addClass('visible');
count++;
if (count>1){ 
$('.count').css('opacity', '0'); 
}    
current_fs = next_fs;
});

$('.color__test').click( function(e){ 
 document.getElementById('color_mobile').value = $(this).attr('alt');
 var next_fs = current_fs.next();
$(current_fs).removeClass('visible');
next_fs.addClass('visible');
count++;
if (count>1){ 
$('.count').css('opacity', '0'); 
}    
current_fs = next_fs;
});

$('.type__test').click( function(e){ 
 document.getElementById('type_mobile').value = $(this).attr('alt');
 var next_fs = current_fs.next();
$(current_fs).removeClass('visible');
next_fs.addClass('visible');
count++;
if (count>1){ 
$('.count').css('opacity', '0'); 
}    
current_fs = next_fs;
});



