$(document).ready(function(){
	
	var numOfCircle = 4;
	for (var i=0; i<numOfCircle; i=i+1)
		$(".circle_container").append("<div id='circle-" + i + "' class='circle'></div>");


	circle1Show();
	// // circle1Animate();

	function circle1Show(){
		$("#circle-0").addClass("circle-0-grow");
		console.log("hey");
		circle1Animate();
	}
	function circle1Animate(){
		$("#circle-0").delay(4000).addClass("circle-0-animation");
		console.log("animating");
	}
	// function circle1(){
	// 	function circle1Show(){
	// 		$("#circle-0").addClass("cirlce-0-grow");
	// 		console.log("growing");
	// 	}
	// 	// function circle1Animate(){
	// 	// 	$("#circle-0").addClass("circle-0-animation");
	// 	// 	console.log("animating");
	// 	// }
	// }
	// circle1();

});