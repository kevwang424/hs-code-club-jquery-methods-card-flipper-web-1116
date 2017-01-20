$( function(){

  $( "#card-one").click(function(){
    //Use toggleClass method here
      $(this).toggleClass("flipped")
  });


	// code click event for card-two here
  $("#card-two").click(function(){
    $(this).toggleClass("flipped")
  })

  // code click event for card-three here
  $("#card-three").click(function(){
    $(this).toggleClass("flipped")
  })
 })
