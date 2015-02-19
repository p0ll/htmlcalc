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
    
});