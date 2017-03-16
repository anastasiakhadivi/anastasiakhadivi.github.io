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
			.animate({
				'width' : '32vw',
				'height' : '32vw',
				'opacity' : '.4'
			}, 1000, 'linear')
			.animate({
				'width': '30vw',
				'height':'30vw',
				'opacity' : '1'
			},1000, 'linear')
			.animate({
				'width':'32vw',
				'height':'32vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width':'30vw',
				'height':'30vw',
				'opacity':'1'
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
			.animate({
				'width' : '32vw',
				'height' : '32vw',
				'opacity' : '.4'
			}, 1000, 'linear')
			.animate({
				'width': '30vw',
				'height':'30vw',
				'opacity' : '1'
			},1000, 'linear')
			.animate({
				'width':'32vw',
				'height':'32vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width':'30vw',
				'height':'30vw',
				'opacity':'1'
			},1000, 'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-1").addClass("show");
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear', circle3);
			console.log("circle 1 & 2");
		}
		function circle3(){
				// $("#circle-0").addClass("show");
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.animate({
				'width' : '32vw',
				'height' : '32vw',
				'opacity' : '.4'
			}, 1000, 'linear')
			.animate({
				'width': '30vw',
				'height':'30vw',
				'opacity' : '1'
			},1000, 'linear')
			.animate({
				'width':'32vw',
				'height':'32vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width':'30vw',
				'height':'30vw',
				'opacity':'1'
			},1000, 'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			// $("#circle-1").addClass("show");
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			$("#circle-2").addClass("show");
			$("#circle-2").animate({
				'width' : '40vw',
				'height':'40vw'
			},2000, 'linear')
			.animate({
				'width' :'42vw',
				'height':'42vw',
				'opacity':'.4'
			},1000,'linear')
			.animate({
				'width' :'40vw',
				'height':'40vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'42vw',
				'height':'42vw',
				'opacity':'.4'
			},1000,'linear')
			.animate({
				'width' :'40vw',
				'height':'40vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'1vw',
				'height':'1vw'
			},6000,'linear', circle4);
			console.log("circle 1 & 2 & 3");
		}
		function circle4(){
			$("#circle-0").animate({
				'width' : '30vw',
				'height': '30vw'
			},2000, 'linear')
			.animate({
				'width' : '32vw',
				'height' : '32vw',
				'opacity' : '.4'
			}, 1000, 'linear')
			.animate({
				'width': '30vw',
				'height':'30vw',
				'opacity' : '1'
			},1000, 'linear')
			.animate({
				'width':'32vw',
				'height':'32vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width':'30vw',
				'height':'30vw',
				'opacity':'1'
			},1000, 'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			// $("#circle-1").addClass("show");
			$("#circle-1").animate({
				'width' : '35vw',
				'height': '35vw'
			},2000, 'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'37vw',
				'height':'37vw',
				'opacity':'.4'
			}, 1000, 'linear')
			.animate({
				'width' :'35vw',
				'height':'35vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' : '1vw',
				'height':'1vw'
			},6000, 'linear');
			// $("#circle-2").addClass("show");
			$("#circle-2").animate({
				'width' : '40vw',
				'height':'40vw'
			},2000, 'linear')
			.animate({
				'width' :'42vw',
				'height':'42vw',
				'opacity':'.4'
			},1000,'linear')
			.animate({
				'width' :'40vw',
				'height':'40vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'42vw',
				'height':'42vw',
				'opacity':'.4'
			},1000,'linear')
			.animate({
				'width' :'40vw',
				'height':'40vw',
				'opacity':'1'
			},1000,'linear')
			.animate({
				'width' :'1vw',
				'height':'1vw'
			},6000,'linear');
			$("#circle-3").addClass("circle");
			$("#circle-3").animate({
				'width' :'44vw',
				'height':'44vw'
			}, 2000, 'linear')
			.animate({
				'width' :'46vw',
				'height':'46vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width' :'44vw',
				'height':'44vw',
				'opacity':'1'
			},1000, 'linear')
			.animate({
				'width' :'46vw',
				'height':'46vw',
				'opacity':'.4'
			},1000, 'linear')
			.animate({
				'width' :'44vw',
				'height':'44vw',
				'opacity':'1'
			},1000, 'linear')
			console.log("circle 1 & 2 & 3 & 4");
		}
		// function circleA(){
		// 	$("#circle-3").removeClass("show");
		// }
		// function circleA(){
		// 	// $("#circle-3").removeClass("show");
		// 	$("circle-3").hide();
		// 	$("#circle-0").animate({
		// 		'width' : '30vw',
		// 		'height': '30vw'
		// 	},2000, 'linear')
		// 	.animate({
		// 		'width' : '32vw',
		// 		'height' : '32vw',
		// 		'opacity' : '.4'
		// 	}, 1000, 'linear')
		// 	.animate({
		// 		'width': '30vw',
		// 		'height':'30vw',
		// 		'opacity' : '1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'32vw',
		// 		'height':'32vw',
		// 		'opacity':'.4'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'30vw',
		// 		'height':'30vw',
		// 		'opacity':'1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height':'1vw'
		// 	},6000, 'linear');
		// 	$("#circle-1").animate({
		// 		'width' : '35vw',
		// 		'height': '35vw'
		// 	},2000, 'linear')
		// 	.animate({
		// 		'width' :'37vw',
		// 		'height':'37vw',
		// 		'opacity':'.4'
		// 	}, 1000, 'linear')
		// 	.animate({
		// 		'width' :'35vw',
		// 		'height':'35vw',
		// 		'opacity':'1'
		// 	},1000,'linear')
		// 	.animate({
		// 		'width' :'37vw',
		// 		'height':'37vw',
		// 		'opacity':'.4'
		// 	}, 1000, 'linear')
		// 	.animate({
		// 		'width' :'35vw',
		// 		'height':'35vw',
		// 		'opacity':'1'
		// 	},1000,'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height':'1vw'
		// 	},6000, 'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height':'1vw'
		// 	},6000, 'linear');
		// 	$("#circle-2").animate({
		// 		'width' : '40vw',
		// 		'height': '40vw'
		// 	}, 2000, 'linear')
		// 	.animate({
		// 		'width' :'42vw',
		// 		'height':'42vw',
		// 		'opacity':'.4'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' :'40vw',
		// 		'height':'40vw',
		// 		'opacity':'1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' :'42vw',
		// 		'height':'42vw',
		// 		'opacity':'.4'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' :'40vw',
		// 		'height':'40vw',
		// 		'opacity':'1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height': '1vw'
		// 	}, 6000, 'linear', circleB);
		// 	console.log("removed circle 4th");
		// }
		// function circleB(){
		// 	$("#circle-2").removeClass("show");
		// 	$("#circle-0").animate({
		// 		'width' : '30vw',
		// 		'height': '30vw'
		// 	},2000, 'linear')
		// 	.animate({
		// 		'width' : '32vw',
		// 		'height' : '32vw',
		// 		'opacity' : '.4'
		// 	}, 1000, 'linear')
		// 	.animate({
		// 		'width': '30vw',
		// 		'height':'30vw',
		// 		'opacity' : '1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'32vw',
		// 		'height':'32vw',
		// 		'opacity':'.4'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'30vw',
		// 		'height':'30vw',
		// 		'opacity':'1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height':'1vw'
		// 	},6000, 'linear', circleC);
		// 	console.log("removed 2nd circle");
		// }
		// function circleC(){
		// 	$("#circle-1").removeClass("show");
		// 	$("#circle-0").animate({
		// 		'width' : '30vw',
		// 		'height': '30vw'
		// 	},2000, 'linear')
		// 	.animate({
		// 		'width' : '32vw',
		// 		'height' : '32vw',
		// 		'opacity' : '.4'
		// 	}, 1000, 'linear')
		// 	.animate({
		// 		'width': '30vw',
		// 		'height':'30vw',
		// 		'opacity' : '1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'32vw',
		// 		'height':'32vw',
		// 		'opacity':'.4'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width':'30vw',
		// 		'height':'30vw',
		// 		'opacity':'1'
		// 	},1000, 'linear')
		// 	.animate({
		// 		'width' : '1vw',
		// 		'height':'1vw'
		// 	},6000, 'linear', circle2);
		// 	console.log("removed 2nd circle");
		// }
})

