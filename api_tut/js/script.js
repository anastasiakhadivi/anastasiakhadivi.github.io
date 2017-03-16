$(document).ready(function() {
  var key = "8d65b60560dc42ea917232110171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";

  $.getJSON(url,function(data){
  		 $("#weather").html(data["current"]["temp_f"] + " degrees");
  	// console.log(data);
  	// console.log(data['current']['wind_mph']);
 // $("#weather").html(data)
 // if (data["current"]["wind_mph"] < 5) {
 // 		// $("h1").addClass("not_windy");
 // 		console.log("it's not that windy");
 // 	}elseif(data['current']['wind_mph'] > 6){
 // 		// $("h1").addClass("kinda_windy");
 // 		console.log("it's kinda windy!")
 // 	}else{
 // 		// $("h1").addClass("windy");
 // 		console.log("it's windyyyyy")
 // 	}

 	// if(data["current"]["wind_mph"] < 10) {
 	// 	console.log("kinda windy");
 	// 	$("h1").addClass("kinda_windy");
 	// }else{
 	// 	console.log("windy");
 	// 	$("h1").addClass("windy");
 	// }
  // });

	  if (data["current"]["wind_mph"] < 5) {
	  	console.log("not windy");
	  	$("#kite").addClass("not_windy");

	  } else if (data["current"]["wind_mph"] > 5 && (data["current"]["wind_mph"]) < 10) {
	  	console.log("kinda windy");
	  	$("#kite").addClass("kinda_windy");
	  } else {
	  	console.log("windy");
	  }

});

});



/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/