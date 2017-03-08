$(document).ready(function(){
	console.log("working");
	// $(".motivational").hide();
	var balloonBlows = 0;
	$(".balloon").on("click", function(){
		balloonBlows = balloonBlows + 1;
		console.log(balloonBlows);
	})

	if (balloonBlows = 3) {
		$(".balloon").hide();
	}

})
