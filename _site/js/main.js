 // Load the DOM
$(document).ready(function(){

  // log

  // Click the hamburger icon

  $('.toggle-mobile-menu').click(function(){

    // Show the mobile menu
      /* alert('Dolla dolla bill yo'); - remove this */
    $('#mobile-menu').toggleClass('mobile-menu-visible');

  });



  // Clicking the x cross icon

  // Close the mobile menu

  /*
  ** Includes:
  ** - jquery.js
  ** - jqueryui.js
  */
  $( function() {
    $( "#accordion" ).accordion();
  });

});
