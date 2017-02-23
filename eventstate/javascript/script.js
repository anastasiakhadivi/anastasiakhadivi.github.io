$(document).ready(function(){
	console.log("I'm working");
	$(".button").on("mouseenter",function(){
		$(this).addClass("focused");
	});
	$(".button").on("mouseleave", function(){
		$(this).removeClass("focused");
	})
	$(".button").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("dark");
		$("h1").html("Clicked!");
	})
	$("h1").on("click", function(){
		$(this).html("Switch");
	})
});
	
