$(document).ready(function(){
	console.log("i'm working");
	$(".help_obi").hide(9000);
	$(".doghouse_button").on("click", function(){
		$(this).toggleClass("dog_active");
	})

	$(".sky_button").on("click",function(){
		$(this).toggleClass("sky_active");
		$(".help_obi").toggle();
	})
});