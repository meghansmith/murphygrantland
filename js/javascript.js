$(document).ready(function(){
	

	$("#menuButton").click(function(){
		$(".menuHide").slideToggle('fast');
		
	});
	$(".aboutHide").addClass('hide');
	$("#expandAbout").click(function(){
		$(".aboutHide").toggleClass('hide');
		var myBtn = $(this);
		if(myBtn.html() == "Read More") {
			$(this).html("Read Less");
		} else {
			$(this).html("Read More");
		}
	});



});