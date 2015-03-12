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
			$("#police box").animate({left:300},111+'px');
			$("#background").css('top',$(window).scrollTop()*14000+'px');
			$("#thing").css('top',$(window).scrollTop()*14000+'px');
		}	
		
		if($(window).scrollTop() >= 15100)
		{
		    $("#fact1").css('left',$(window).scrollTop()*1200+'px');
			
		}
		
	if($(window).scrollTop()>=1240)
	{
		$("#enemy1").animate({left:400},1240+'px');
		$("#deadly").animate({left:300},1200+'px'); 
		$("#deadly2").animate({left:350},1200+'px');
        $("#deadly3").animate({left:300},1200+'px');
	}
	
	if($(window).scrollTop() >=1420)
	{
		$("#cybermen box").animate({left:300},1400+'px');
		$("#robots").animate({left:300},1400+'px');
	}
		if($(window).scrollTop() >=15400)
		{
	    $("faces").css('top',top*15400+'px');
		}
	})
});
//
	
