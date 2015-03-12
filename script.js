// JavaScript Document
$(document).ready(function() {

alert('You now have jQuery available to use in this page');

});

$(document).ready(function() {
	$('h2').hide();
});


$(document).ready(function(){
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		$("#scrollPosition").text(top);
				$("#welcome").css('top',top*100+'px');
		
	if($(window).scrollTop() >=14200)
		{
			$("#police box").animate({left:300},11100+'px');
			$("#background").css('top',$(window).scrollTop()*14000+'px');
			$("#thing").css('top',$(window).scrollTop()*14000+'px');
		    $("#fact1").css('left',$(window).scrollTop()*11100+'px');
			$("#enemy1").css('top',$(window).scrollTop()*12400+'px');
		}
	if($(window).scrollTop()>=1240)
	{
		$("#deadly").animate({left:300},1200+'px'); 
		$("#deadly2").animate({left:350},1200+'px');
        $("#deadly3").animate({left:300},1200+'px');
	}
	
	if($(window).scrollTop() >=1420)
	{
		$("#cybermen box").css('left',top*13400+'px');
		$("#robots").animate({left:300},1400+'px');
	}
		if($(window).scrollTop() >=15400)
		{
	    $("faces").css('top',top*15400+'px');
		}
	})
});
//
	
