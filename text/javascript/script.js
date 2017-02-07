$(function() {
    // alert("hey");
    $( ".li_drag" ).draggable();
    $( ".droppable" ).droppable({
      drop: function( event) {
        // $(".li_drag").css("color", "red");
        console.log("Dropped!");
      }
    });
  } );