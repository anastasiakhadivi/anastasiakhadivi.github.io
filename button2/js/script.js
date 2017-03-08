// $(document).ready(function(){
// 	console.log("working");

$(document).ready(function(){
	console.log("working");

	var numOfCircles = 12;

 	// var colorBank = ["#pink","yellow", "red"];
 	// var randomColor = colorBank[Math.floor(Math.random() * colorBank.length)];

// 	for (var i=0; i<numOfCircles; i=i+1){
// 		$(".container").append("<div class='circle'></div>")
// 		if (i % 2 == 0) {
// 			$(".circle").css({
// 				'background-color': randomColor
// 			})
// 		}
// }
for (var i=0; i<numOfCircles; i=i+1){
	$(".container").append("<div class='circle'></div>");
		if ($(".circle").hasClass("circle")) {
			console.log("I have the class circle");
		}
	}
	var clickCount = 0;
	$(".circle").on("click", function(){
 		clickCount +=1;
		var colorBank = ["#pink","yellow", "red", "purple", "green", "turquoise", "deepskyblue", "pink", "orange", "maroon", "brown", "black", "magenta", "teal"];
 		var randomColor = colorBank[Math.floor(Math.random() * colorBank.length)];
 		var clickMax = 8;
		$(this).css("background-color", randomColor);
 		console.log(clickCount);

		if (clickCount % 2 === 0 ) {
			$(this).fadeOut("slow");
		}
		if (clickCount === 22) {
			$(".circle").show();
		}
		if (clickCount === 44) {
			$(".circle").show();
		}
		if (clickCount === 66) {
			$(".circle").show();
		}

	})
	function changeShape(){
		var size1 = Math.floor(Math.random() * 300 + 90);
		var size2 = Math.floor(Math.random() * 100 + 5);
		var size3 = Math.floor(Math.random() * 20 + 90);
		var size4 = Math.floor(Math.random() * 200 + 50);
		var size5 = Math.floor(Math.random() * 150 + 70);
		var size6 = Math.floor(Math.random() * 12 + 27);


		$(".circle:first-child").css({
			height:size1
		});
		$(".circle:nth-child(2)").css({
			height:size2
		});
		$(".circle:nth-child(3)").css({
			height:size3
		});
		$(".circle:nth-child(4)").css({
			height:size4
		});
		$(".circle:nth-child(5)").css({
			height:size5
		});
		$(".circle:nth-child(6)").css({
			height:size6
		});
		$(".circle:nth-child(7)").css({
			height:size6
		});
		$(".circle:nth-child(8)").css({
			height:size5
		});
		$(".circle:nth-child(9)").css({
			height:size4
		});
		$(".circle:nth-child(10)").css({
			height:size3
		});
		$(".circle:nth-child(11)").css({
			height:size2
		});
		$(".circle:nth-child(12)").css({
			height:size1
		});
	}


window.setInterval(changeShape, 1000);
// window.setInterval(randomColor, 3000);
})
