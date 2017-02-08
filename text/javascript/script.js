$(function() {
    // alert("hey");
    $( ".li_drag" ).draggable();
    $( ".droppable" ).droppable({
      drop: function( event) {
        // $(".li_drag").css("font-family", "Franklin Gothic Heavy");
        console.log("Dropped!");
      }
    });
  } );