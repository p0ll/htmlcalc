$(document).ready(function () {

    $("#calculate").click(function () {
        var amount = parseInt($("#amount").val(), 10);
        var f = $("#finrtn").val();
        var finRtn = (f/100)
        var c = $("#cost").val();
        var cost = (c/100)
        var duration = parseInt($("#duration").val(), 10);
        var yearsPerGrant = parseInt($("#yearspergrant").val(), 10);
        var simp = parseInt($("#simp").val(), 10);
        var netRtn = (finRtn - cost);
        var temp = (1 + netRtn);
        var totalInvSize = amount * Math.pow(temp, duration);
        var socImpGrant = (((amount * (Math.pow(temp, yearsPerGrant))) - amount) * (duration / yearsPerGrant) + amount);
        var socImpInv = (amount * (simp/100));
        var socialImpactPA = (socImpGrant + socImpInv);
        $("#result").html(socialImpactPA.toFixed(0));
 // 			alert(cost)
 	   });
    
});

//   
//	        var socImpGrant = (((amount * (Math.pow(temp, yearsPerGrant))) - amount) * (duration / yearsPerGrant)) + (amount * (simp/100));


//        if (parseInt($("#input").val(), 10) !== '' && parseInt($("#input").val(), 10) !== undefined) {

//            $("#result").html("The social impact of this investment is " + socialImpactPA);
//        } 
//                          else {
//            $("#result").html("Please enter some value");
 //       }
//    });
//});
