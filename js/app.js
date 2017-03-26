$(document).ready(function(){
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");

  //An image to overlay
  $overlay.append($image);

  //Add overlay
  $("body").append($overlay);


  //Capture the click event on a link to an image
  $("#cookoutPics a").click(function(event){
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);

    //Update overlay with the image linked in the linked
    $image.attr("src", href);

    //Show the overlay
    $overlay.show();
  });


  //when overlay is clicked
  $overlay.click(function(){
    //hide the overlay
    $overlay.hide();
  });

  $overlay.scroll(function(){});
});
