$(function(){
	//var popup = ('<div class="popup-background"><div class="popup">My popup</div></div>');
	$('#get-popup')
	.bind('click',(function(){
		$('.popup-background, .popup').fadeIn(400);
		var top = $(window).scrollTop();
		var left = $(window). scrollLeft();
		$(window).scroll(function(){
			$(this).scrollTop(top).scrollLeft(left);
		});
		$('body, html').unbind('scroll', 'body', false);
		$('body').bind("scroll", false);
	}));

	$('.popup-background').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
			$(window).unbind('scroll');
		}		
	});
	$(window).scroll(function(){
			$(this).bind().scrollLeft(left);
		});
/* для тачскрина  */
	$('#get-popup')
	.bind('touchstart',(function(){
		$('.popup-background, .popup').fadeIn(400);
		var top = $(window).scrollTop();
		var left = $(window). scrollLeft();
		$(window).scroll(function(){
			$(this).scrollTop(top).scrollLeft(left);
		});		
		$('body, html').unbind('scroll', 'body', false);
		$('body').bind("scroll", false);
	}));

	$('.popup-background').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
			$(window).unbind('scroll');
		}		
	});
	$(window).scroll(function(){
			$(this).bind().scrollLeft(left);
		});
});