$(document).ready(function(){
	$('.inner').css({
		opacity: '1',
	});
	setTimeout(function(){
		$('body').find('.is-load').removeClass('is-load')
	}, 1500)
})