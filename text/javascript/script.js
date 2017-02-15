console.log("i'm working");
$(function() {
    // alert("hey");
    $( ".li_drag, .frost, .mckay" ).draggable({
    // $( ".droppable" ).droppable({
      drop: function(event) {
      }
    });
    $(".poem_container").hide();
    $(".li_drag").click(function(){
        $(".poem_container").show();
    })
  } );