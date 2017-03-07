$(document).ready(function() {
var myVariable;
myVariable = 10;
var yourVariable;
yourVariable = 20;

console.log(myVariable);
$(".ending").hide();
myVariable = yourVariable + 10;
console.log(myVariable);

var popCount = 0;
var numOfBalloons = 30;

// var numOfExclamations = 20;

for (var i=0; i<numOfBalloons; i=i+1){
	$("#balloon-container").append("<div class='balloon'></div>");
	if ( i % 3 === 0){
		// every third item
	$(".balloon").last().addClass("big");
	}
}


$(".balloon").on("mouseenter", function(){
$(this).addClass("popped");

var audio = new Audio("pop.m4a");
audio.play();

popCount = popCount + 1;
// console.log(popCount);
$("#pop-target").html(popCount);

// if all the balloons are popped, display congrats message
if (popCount === numOfBalloons) {
	$("body").html("<span class='ending'><h1>Winner</h1><h2>!</h2></span>" );

}


// }else if (popCount === 5){
// alert("keep going");
// }else{
// console.log("Not done yet.");
// }
})
});