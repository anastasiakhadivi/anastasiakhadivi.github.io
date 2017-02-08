$(function() {
    // alert("hey");
    $( ".li_drag" ).draggable();
    $( ".droppable" ).droppable({
      drop: function(event) {
      	// $(".draggable").css("margin-top", "30px");
        // $(".li_drag").css("font-family", "Franklin Gothic Heavy");
        // $(".droppable").css("height","350px");
        console.log("Dropped!");
      }
    });
  } );