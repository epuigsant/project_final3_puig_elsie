// JQuery Plugin - Mean Menu
// Turns navigation into responsive hamburger menu

$( document ).ready( function( ) {
    $( 'header nav' ).meanmenu();
} );

//JQuery Plugin - Text Rotator
// Animates or rotates text

$( '.rotate' ).textrotator( {
  animation: 'dissolve',
  speed: 2000
} );


$( "#more" ).click(function() {
 $( "#target" ).slideDown( "slow", function() {
  });
});
