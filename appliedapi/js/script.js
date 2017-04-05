// $(document).ready(function(){
// 	var key = "c1ac9baab6fc4360912cd5b4b02716a0";
//   	var url = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=" + key;

//   	$.getJSON(url, function(data){
//   		 // $(".news").html(data["source"]);

//   		 console.log(data);

//   		 if (data["source"] ==="cnn"){
//   		 	$(".news").addClass("cnn_news");
  		 
//   		console.log(data["source"]);
//   		// console.log(data["sortBy"]);
//   		console.log(data["status"]);
//   		console.log(data["articles"]["0"]["author"]);
//   		 }


//       $(".titles").html(data["articles"]["1"]["title"]);

//   		 // loop for printing multiple 

//   		 // for i < articles.length



//   	})
//     // }


// });

// // function PrintResults(result) {

// // for (var i = 0; i < result.length; i++) { 
// //   alert(result.articles.Object[0].title);
// // }

// $(document).ready(function(){
//   var numOfStories = 6;
//   for (var i=0; i<=numOfStories; i=i+1)
//     $(".story_container").append("<div id='story-" + i + "' class='story'></div>");

//   var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
//   url += '?' + $.param({
//   'api-key': "f41cc5be892a4a20a2ac630f02451c07"
// });

//   $.getJSON(url,function(data){
//     console.log(data);
//     $("#story-1").html(data["results"]["0"]["title"]).addClass("titles");
//     $("#story-2").html(data["results"]["1"]["title"]).addClass("titles");
//     $("#story-3").html(data["results"]["2"]["title"]).addClass("titles");
//     $("#story-4").html(data["results"]["3"]["title"]).addClass("titles");
//     $("#story-5").html(data["results"]["4"]["title"]).addClass("titles");
//     $("#story-6").html(data["results"]["5"]["title"]).addClass("titles");

    
//     $("#story-2").html(data["results"]["1"]["title"]).addClass("titles");
//     $("#story-3").html(data["results"]["2"]["title"]).addClass("titles");
//     $("#story-4").html(data["results"]["3"]["title"]).addClass("titles");
//     $("#story-5").html(data["results"]["4"]["title"]).addClass("titles");
//     $("#story-6").html(data["results"]["5"]["title"]).addClass("titles");





//   })



// });

$(document).ready(function(){

  var url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

  $.getJSON(url, function(data){
    console.log(data);

    $(".joke").html(data["message"]).addClass("new_joke");

$(".new").on("click", function(){
  $(".laughing").toggleClass("ha_ha");
  console.log("working");
})
  })
})
