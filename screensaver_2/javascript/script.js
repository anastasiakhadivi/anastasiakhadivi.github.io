$(document).ready(function(){
	console.log("working")
	var numOfCircles = 6;
	for (var i = 0; i < numOfCircles; i+i+1) {
		$(".circle_container").append("<div class='circle'></div>");
		console.log(numOfCircles);
	}
});