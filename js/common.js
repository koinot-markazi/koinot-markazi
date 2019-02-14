$(function() {

	// Custom JS
	$('.contact').click(function(){
		$('.km-contacts').css("left", "0");
		// $('.km-contacts').toggle();
	})
	$('.close-km-contacts').click(function(){
		$('.km-contacts').css("left", "-100vw")
	})

	var pW = $('.km-projects-blocks').width();
	console.log(pW);
	$('.km-projects-blocks').css('height', pW);

	$('.project').click(function(){
		$('.km-projects').css("right", "0");
		$('.km-projects-bg').css("display", "block");
	})
	$('.km-projects-logo').click(function(){
		$('.km-projects').css("right", "-100vw");
		$('.km-projects-bg').css("display", "none");
	})
});
