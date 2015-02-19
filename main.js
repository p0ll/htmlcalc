
$(window).load(function(){
   $('#introModal').modal('show');
   $("#result").html("187889"); 
   $("#result2").html("193008");
   $('#calculate').hide();
   $('#calculate2').hide();
   $("#investmentName").html("Example Grant Programme");
   $("#investmentName2").html("Example Social Investment");
   $('#nameyourprogramme').hide();
   $('#nameyourprogramme2').hide();
 });

$(document).ready( function() {
    $('#simpslider2').slider({
      min: 0,
      max: 100,
      value: 25,
      step: 1,
      slide: function( event, ui ) {
        $( "#simpvalue2" ).val( ui.value );
        calculate();
        console.log(ui.value)
      }
    });
//    $( "#simpvalue2" ).val( $( "#simpslider2" ).slider( "value" ));
});

//jQuery.noConflict();
//(function($) {
//    $(".slider").slider//({
 //     min: 0,
 //     max: 100,
 //     value: [40]
 //     slide: function( event, ui ) {
 //       $( "#simpint" ).val(ui.value[ 0 ]);
 //     }
 //   })
//(jQuery);
//})

//$(function () {
//  $('[data-toggle="popover"]').popover()
//});




