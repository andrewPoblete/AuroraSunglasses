// JavaScript Document
$(document).ready(function () {

	//Append a div with hover class to all the LI
	$('#navigationbutton li').append('<div class="hover"><\/div>');


	$('#navigationbutton li').hover(
		
		//Mouseover, fadeIn the hidden hover class	
		function() {
			
			$(this).children('div').fadeIn('50000000');	
		
		}, 
	
		//Mouseout, fadeOut the hover class
		function() {
		
			$(this).children('div').fadeOut('5000');	
		
	})/*.click (function () {
	
		//Add selected class if user clicked on it
		$(this).addClass('selected');
		
	})*/;

});
