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


$("#sms").on("click", function(e) {
document.getElementById('social').value = 'cмс'; 
});

$("#telegram").on("click", function(e) {
document.getElementById('social').value = 'Telegram'; 
});
$("#viber").on("click", function(e) {
document.getElementById('social').value = 'Viber'; 
});
$("#watsap").on("click", function(e) {
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
if (count>3){ 
$('.next').hide('slow');

$('#send').fadeIn(1000); 
}
current_fs = next_fs;
});   





$(".back").click(function(){
var previous_fs = $(current_fs).prev();
// $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
$(current_fs).removeClass('visible');
previous_fs.addClass('visible');
current_fs.hide('slow');     
previous_fs.fadeIn(1000);
current_fs = previous_fs;
count--;
if (count<4){ 
$('#send').hide('slow'); 
$('.next').fadeIn(1000);      
}

if (count==1){
$('#previous').hide('slow'); 
}
if (count<2){ 
$('#previous').hide('slow'); 
}
});



$('#send').click(function(){
var form = $('#msform');
form.find('.compulsory').addClass('empty_field');

form.find('.compulsory').each(function(){
if($(this).val() != ''){
$(this).removeClass('empty_field');
} else {
$(this).addClass('empty_field');        
}
var sizeEmpty = form.find('.empty_field').size(); 

if(sizeEmpty > 0){
form.find('.empty_field').css({'border-color':'#d8512d'});

return false;
}    	
});
});

$(document).ready(function(){
$('.get_offer').click( function(){ 
var scroll_el = $(this).attr('href'); 
if ($(scroll_el).length != 0) { 
$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // 
}
return false; 
});
});

var tabs = $('.catalog__desktop__tabs');
console.log(tabs);


// $(tabs).each(function() {
// 	if ($(this).hasClass("active")) {
// 		$('.closed_tab').css('display', 'none');
// 	    $('.opened_tab').css('display', 'inline-block');	
// 		}
// 		else {
// 		$('.closed_tab').css('display', 'inline-block');
// 	    $('.opened_tab').css('display', 'none');	
// 		}
		
//     });

$(".catalog__desktop__tabs").click(function(){

	if ($(this).hasClass("active")) {
		alert('ОООО');
	}

// $(tabs).find('li.nav-item.catalog__desktop__tabs.active'){
// 	alert("Вау");
// }
});



// $("a.catalog__desktop__tabs").click(function(e){

// 	e.target.find('.closed_tab').css('display', 'none');


 	   
// });



// $(document).ready( function() {
// if ($('.catalog__desktop__tabs').hasClass("active")) 


//  {
// 	$('.closed_tab').css('display', 'none');
// 	$('.opened_tab').css('display', 'inline-block');	
// }

// if ($('.catalog__desktop__tabs').not(".active")) 
//  {
// 	$('.closed_tab').css('display', 'inline-block');
// 	$('.opened_tab').css('display', 'none');	
// }
 
// });


// $(document).ready( function() {
// $('.presentation input[type=file]').change(function(){
// var filename = $(this).val().replace(/.*\\/, '');
// $('#filename_presentation').val(filename);        
// });
// $('.plan input[type=file]').change(function(){
// var filename = $(this).val().replace(/.*\\/, '');     

// $('#filename_plan').val(filename);
// });
// });
// $('#msform').on('submit', function(event) { 
// $('#progressbar').hide('fast');
// $('#blindLayer').show(); 
// $('#letter_sent').fadeIn('fast');                           
// });
// $('#close').on('click', function(event) {
// $(current_fs).hide();
// $(current_fs).removeClass('question'); 
// $(base_question).addClass('question'); 
// $(base_question).fadeIn('slow');  
// $('#blindLayer').hide(); 
// $('#send').hide(); 
// $('#previous').hide();
// $('.next').show();
// $('#letter_sent').hide('slow'); 
// $('#msform').fadeIn('slow');
// $('#progressbar').show();
// $('#progressbar li').removeClass('active');
// current_fs = base_question;
// count=1;
// });

// $(document).ready(function(){         
// PopUpHide();
// });

// function PopUpShow(){
// $('#popup1').show('fast');

// $('#video').attr('src', 'https://player.vimeo.com/video/266838384');
// $('#blindLayer').css('display','block');
// }   
// function PopUpHide(){  
// $('#blindLayer').css('display' ,'none');     
// $('#video').attr('src', '');
// $('#popup1').hide('slow');

// }