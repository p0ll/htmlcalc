$(document).ready(function () {

    $("#calculate2").click(function () {
        var amount = parseInt($("#amount2").val(), 10);
        var finRtn = $("#finrtn2").val();
        var cost = $("#cost2").val();
        var duration = parseInt($("#duration2").val(), 10);
        var yearsPerGrant = parseInt($("#yearspergrant2").val(), 10);
        var simp = parseInt($("#simp2").val(), 10);
        var netRtn = (finRtn - cost);
        var temp = (1 + netRtn);
        var totalInvSize = amount * Math.pow(temp, duration);
        var socImpGrant = (((amount * (Math.pow(temp, yearsPerGrant))) - amount) * (duration / yearsPerGrant) + amount);
        var socImpInv = (amount * (simp/100));
        var socialImpactPA = (socImpGrant + socImpInv);
        $("#result-text2").html("The social impact of this investment is ");
        $("#result2").html(socialImpactPA);
 // 			alert(socImpGrant)
 	   });
    
});