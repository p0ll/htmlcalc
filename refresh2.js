$(document).ready(function () {

    $("#refresh2").click(function () {
        $("#amount2").val('');
        $("#finrtn2").val('');
        $("#cost2").val('');
        $("#duration2").val('');
        $("#yearspergrant2").val('');
        $("#simpvalue2").val('');
        $("#result-text2").html('');
        $("#result2").html('');
        $("#calculate2").show();
        $("#investmentName2").hide();
        $("#nameyourprogramme2").show();
 	   });

    $('#simpslider2').slider({
      min: 0,
      max: 100,
      value: 25,
      step: 1,
      slide: function( event, ui ) {
        $( "#simpvalue2" ).val(ui.value);
      }
    });
    $( "#simpvalue2" ).val( $( "#simpslider2" ).slider( "value" ));
    
});