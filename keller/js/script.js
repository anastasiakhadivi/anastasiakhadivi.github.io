// $(document).ready(function(){
	


// 	function wipeOne(){
// 		setTimeout(function(){
// 			console.log("working1");
// 			$("body").html("<ul>2009<li><img src='images/2009-960.jpg' height='70px'><a href=''>The Adaptation to My Generation</a></li><li><img src='images/echo.png'><a href=''>Echo #12</a></li><li><img src='images/you_me.png'><a href=''>You trying to be Me trying to be You</a></li><li><img src='images/keetra1.jpg'><a href='#'>Reverse Keetra</a></li><li><img src='images/movies.gif'><a href='#'>Counting the Movies I've seen</a></li><li><img src='images/ignobel.png'><a href='#'>Ignobel Award</a></li><li><img src='images/echo2.png'><a href='#'>Echo #11</a></li><li><img src='images/turnaround.png'><a href='#'>Turnaround Coins</a></li></ul>")
// 		},1000);
// 		setTimeout(function(){
// 			console.log("working2");
// 			$("body").html("<div style='height:100vh; width:100vw; background-color: #99ffa6'><p>2010</p><ul style='display:inline'><img src='images/line.jpg'><a href='#'>10 Attempts to draw a straight line on a scanner</a><img src='images/line2.jpg'><a href=''>16 Attemps to draw a straight line on a scanner </a></ul></div>")
// 		},2000);
// 		setTimeout(function(){
// 			console.log("working3");
// 			$("body").html("<div style = 'height: 100vh; width: 100vw; background-color: #eaedf2'><ul><li>Upside Frowns, 2011</li><img src='images/frown.gif'><li>Realigning My Thoughts</li><img src='images/thoughts.gif'></ul></div>")
// 		},3000);
// 	}
// 	// function wipeTwo(){
// 	// 	setTimeout(function(){
// 	// 		console.log("working2");
// 	// 		$("body").html()
// 	// 	}2000);
// 	// }
// wipeOne();
// })

$(document).ready(function(){
	$(".wipe1").hide();
	$(".wipe2").hide();
	$(".wipe3").hide();
	$(".wipe4").hide();
	$(".wipe5").hide();

	function wipe(){
		setTimeout(function(){
			console.log("working1");
			$(".starting").hide();
			$(".wipe1").show();
		}, 5000);
		setTimeout(function(){
			console.log("working2");
			$(".wipe1").hide();
			$(".wipe2").show();
		}, 10000);
		setTimeout(function(){
			console.log("working3");
			$(".wipe2").hide();
			$(".wipe3").show();
		},15000);
		setTimeout(function(){
			console.log("working4");
			$(".wipe3").hide();
			$(".wipe4").show();
		},20000);
		setTimeout(function(){
			console.log("working_done!");
			$(".wipe4").hide();
		}, 25000);
		setTimeout(function(){
			console.log("final page");
			$(".wipe5").show();
		}, 35000)
	}
	wipe();
})