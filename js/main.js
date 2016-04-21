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

// This JQuery code will slide down a div
// with additional event information
// when events widget button is moused over
$( '#more' ).mouseover( function( ) {
 $( '#target' ).slideDown( 'slow', function() {
  } );
} );


//Added a <p> tag and content to the DOM

var newContent = document.getElementById( 'promotions' );
var newParagraph = document.createElement( 'p' );

newParagraph.innerHTML = 'We are waiting for you';

newContent.appendChild( newParagraph );
