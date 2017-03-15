$(document).ready(function(){
	
	var numOfCircle = 4;
	for (var i=0; i<numOfCircle; i=i+1)
		$(".circle_container").append("<div id='circle-" + i + "' class='circle'></div>");

	circle1();

		// circle1();
		function circle1(){
			$("#circle-0").addClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width': '31vw',
				'height':'31vw'
			},1000, 'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear', circle2);
			console.log("circle 1 only");
		}

		function circle2(){
			// $("#circle-0").addClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-1").addClass("show");
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear', circle3);
			console.log("circle 1 & 2 only");
		}
		function circle3(){
			// $("#circle-0").addClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			// $("#circle-1").addClass("show");
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-2").addClass("show");
			$("#circle-2").animate({
				'width' : '40vw',
				'height': '40vw'
			}, 2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height': '1vw'
			}, 6000, 'linear', circle4);
			console.log("circle 1,2,3!");
		}
		function circle4(){
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-2").animate({
				'width' : '40vw',
				'height': '40vw'
			}, 2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height': '1vw'
			}, 6000, 'linear');
			$("#circle-3").addClass("show");
			$("#circle-3").animate({
				'width' : '44vw',
				'height': '44vw'
			}, 2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height': '1vw'
			}, 6000, 'linear', circleA);
			console.log("circle 4!");
		}
		function circleA(){
			$("#circle-3").removeClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-2").animate({
				'width' : '40vw',
				'height': '40vw'
			}, 2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height': '1vw'
			}, 6000, 'linear', circleB);
			console.log("removed circle 4");
		}
		function circleB(){
			$("#circle-2").removeClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear', circleC);
			console.log("removed 3rd circle");
		}
		function circleC(){
			$("#circle-1").removeClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.delay(4000)
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear', circle2);
			console.log("removed 2nd circle");
		}
})