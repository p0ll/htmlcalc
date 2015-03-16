$(document).ready(function () {

    $("#calculate2").click(function () { 
   //     validateForm();
        calculate2();

 //       $('#investmentName').html(name);
 //       $('#nameyourprogramme').hide();
 // 			alert("hello")
 	   });
    
});


function calculate2(){
    console.log('I am here!!')
    var amount = parseInt($("#amount2").val(), 10);
    console.log("amount is " + amount);
    var f = $("#finrtn2").val();
    var finRtn = (f/100)
    console.log("finrtn is " + finRtn);
    var c = $("#cost2").val();
    var cost = (c/100)
    console.log("cost is " + cost);
    var duration = parseInt($("#duration2").val(), 10);
    console.log("duration is " + duration);
    var yearsPerGrant = parseInt($("#yearspergrant2").val(), 10);
    console.log("yearspergrant is " + yearsPerGrant);
    var simp = parseInt($("#simpvalue2").val(), 10);
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
    $("#result2").html(socialImpactPA.toFixed(0));


    function validateForm() {
        if (amount === NaN || amount = 0) {
          alert("Please enter an investment amount");
         return false;
        };
    };

};





