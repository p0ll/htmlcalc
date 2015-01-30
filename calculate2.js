$(document).ready(function () {

    $("#calculate2").click(function () {
        var amount = parseInt($("#amount2").val(), 10);
        var f = $("#finrtn2").val();
        var finRtn = (f/100)
        var c = $("#cost2").val();
        var cost = (c/100)
        var duration = parseInt($("#duration2").val(), 10);
        var yearsPerGrant = parseInt($("#yearspergrant2").val(), 10);
        var simp = parseInt($("#simp2").val(), 10);
        var netRtn = (finRtn - cost);
        var temp = (1 + netRtn);
        var totalInvSize = amount * Math.pow(temp, duration);
        var socImpGrant = (((amount * (Math.pow(temp, yearsPerGrant))) - amount) * (duration / yearsPerGrant) + amount);
        var socImpInv = (amount * (simp/100));
        var socialImpactPA = (socImpGrant + socImpInv);
        $("#result2").html(socialImpactPA.toFixed(0));
 // 			alert("hello")
 	   });
    
});