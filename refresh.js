$(document).ready(function () {

    $("#refresh").click(function () {
        $("#amount").val('');
        $("#finrtn").val('');
        $("#cost").val('');
        $("#duration").val('');
        $("#yearspergrant").val('');
        $("#simp").val('');
        $("#result-text").html('');
        $("#result").html('');
        $('#calculate').show();
        $('#investmentName').hide();
        $('#nameyourprogramme').show();
 	   });

    $('#simpslider').slider({
      min: 0,
      max: 100,
      value: 25,
      step: 1,
      slide: function( event, ui ) {
        $( "#simpvalue" ).val(ui.value);
      }
    });
    $( "#simpvalue" ).val( $( "#simpslider" ).slider( "value" ));
    
});