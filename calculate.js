$(document).ready(function () {

        $("#calculate").click(function () { 
        calculate();

       });
    
});

function calculate() {
    console.log("yes!");
    var amount = parseInt($("#amount").val(), 10);
    console.log("amount is " + amount);
    var f = $("#finrtn").val();
    var finRtn = (f/100);
    console.log("finrtn is " + finRtn);
    var c = $("#cost").val();
    var cost = (c/100);
    console.log("cost is " + cost);
    var duration = parseInt($("#duration").val(), 10);
    console.log("duration is " + duration);
    var yearsPerGrant = parseInt($("#yearspergrant").val(), 10);
    console.log("yearspergrant is " + yearsPerGrant);
    var simp = parseInt($("#simpvalue").val(), 10);
    console.log("simp is " + simp);
    var netRtn = (finRtn - cost);
    console.log("netRtn is " + netRtn);
    var temp = (1 + netRtn);
    var totalInvSize = amount * Math.pow(temp, duration);
    console.log("totalInvSize is " + totalInvSize);
    var socImpGrant = (((amount * (Math.pow(temp, yearsPerGrant))) - amount) * (duration / yearsPerGrant) + amount);
    console.log("SIMP from grant is " + socImpGrant);
    var socImpInv = (amount * (simp/100));
    console.log("SIMP from Inv is " + socImpInv);
    var socialImpactPA = (socImpGrant + socImpInv);
    console.log("SIMP PA is " + socialImpactPA);
    $("#result").html(socialImpactPA.toFixed(0));

    function validateForm() {
        if (finRtn = 0) {
          alert("Please enter an investment amount");
        };
        console.log(finRtn);
    };

    validateForm();
};
    


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
