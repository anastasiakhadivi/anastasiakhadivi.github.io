$(document).ready(function(){

				var numOfCircle = 4;



				for (var i=0; i<numOfCircle; i=i+1)
					$(".circle_container").append("<div id='circle-" + i + "' class='circle'></div>");

				$(".circle:nth-child(2),.circle:nth-child(3), .circle:nth-child(4)").hide();

			
				animateCircles().done(function(){
					executeAfterCircle1();
				})
				animateCircles2().done(function(){
					executeAfterCircle2();
				})

				animateCircles3().done(function(){
					executeAfterCircle3();
				})
				animateCircles4().done(function(){
					executeAfterCircle4();
				})


				function executeAfterCircle1(){
					console.log("adding second circle");
					$(".circle:nth-child(2)").show();
					animateCircles2();
				}

				function executeAfterCircle2(){
					console.log("adding third circle");
					$(".circle:nth-child(3)").show();
					animateCircles3();
				}
				function executeAfterCircle3(){
					console.log("adding fourth circle");
					$(".circle:nth-child(4)").show();
					animateCircles4();				
				}
				function executeAfterCircle4(){
					console.log("cycle done!");
					$(".circle:nth-child(2), .circle:nth-child(3), .circle:nth-child(4)").hide();
					animateCircles();
				}

				function animateCircles(){
					console.log('circle 1 only');
					var deferred = $.Deferred();
					$(".circle:first-child").animate({
						'width' : '30vw',
						'height': '30vw'
					},4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000,'linear',function(){
						deferred.resolve();
					})

					return deferred.promise();
					// console.log(animateCircles);
				}
				function animateCircles2(){
					var deferred = $.Deferred();
					$(".circle:nth-child(2)").animate({
						'width' : '40vw',
						'height': '40vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:first-child").animate({
						'width' : '35vw',
						'height': '35vw'
					},4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000,'linear', function(){
						deferred.resolve();
					})
					return deferred.promise();
				}
				function animateCircles3(){
					var deferred = $.Deferred();
					$(".circle:nth-child(3)").animate({
						'width' : '44vw',
						'height': '44vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:nth-child(2)").animate({
						'width' : '40vw',
						'height': '40vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:first-child").animate({
						'width' : '35vw',
						'height': '35vw'
					},4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000,'linear', function(){
						deferred.resolve();
					})
					return deferred.promise();
				}
				function animateCircles4(){

					var deferred = $.Deferred();
					$(".circle:nth-child(4)").animate({
						'width' : '50vw',
						'height': '50vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:nth-child(3)").animate({
						'width' : '44vw',
						'height': '44vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:nth-child(2)").animate({
						'width' : '40vw',
						'height': '40vw'
					}, 4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000, 'linear');
					$(".circle:first-child").animate({
						'width' : '35vw',
						'height': '35vw'
					},4000, 'linear')
					.delay(7000)
					.animate({
						'height' : '1vw',
						'width' :'1vw'
					}, 8000,'linear',function(){
						deferred.resolve();
					})
					return deferred.promise();
				}

				



			});
