$(document).ready(function () {

    $("#calculate").click(function () {
        var amount = parseInt($("#amount").val(), 10);
        var finRtn = parseInt($("#finrtn").val(), 10);
        var cost = parseInt($("#cost").val(), 10);
        var duration = parseInt($("#duration").val(), 10);
        var yearsPerGrant = parseInt($("#yearspergrant").val(), 10);
        var simp = parseInt($("#simp").val(), 10);
        var netRtn = (finRtn - cost);
        var temp = (1 + netRtn);
        var totalInvSize = amount * Math.pow(temp, duration);
        var socImpGrant = (((amount * Math.pow(temp, yearsPerGrant)) - amount) * (duration / yearsPerGrant)) + (amount / simp);
        var socImpInv = (amount * simp);
        var socialImpactPA = (socImpGrant + socImpInv);
        $("#result-text").html("The social impact of this investment is ");
        $("#result").html(socialImpactPA);

 	   });
    
});

//        

//        if (parseInt($("#input").val(), 10) !== '' && parseInt($("#input").val(), 10) !== undefined) {

//            $("#result").html("The social impact of this investment is " + socialImpactPA);
//        } 
//                          else {
//            $("#result").html("Please enter some value");
 //       }
//    });
//});
