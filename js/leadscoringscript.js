//business logic

////LeadObjectMaker ////
function LeadObjectMaker (employeeNumber, roleType, industry, timeline, score) {
  this.employeeNumber=employeeNumber;
  this.roleType= roleType;
  this.industry= industry;
  this.timeline= timeline;
  this.engagement= engagement;
  this.score=score;
}
//// leadMath/////
LeadObjectMaker.prototype.leadMath = function (roleType){
  if (roleType==="CEO") {
    return 8 + (this.industry.length * 2) + (this.timeline.length * 3);
  }
  else {
    return 10 + (this.industry.length * 2) + (this.timeline.length * 3);

  }
}

/////receipt maker////
function receiptMaker (orderArray) {
  if (orderArray.length === 1) {
    return orderArray[0];
  }
  else if (orderArray.length >1 ) {
    return orderArray.join("\n");
  }
}



// user interface logic
$(document).ready(function() {


  // $("#new-order").click(function(event))
  ///submit///
  $("form#order-form").submit(function(event) {
    event.preventDefault();


    // lead-role industry company-size timeline
    ///Input///
    var contactName=$("#contact-name").val();
    var orgName=$("#org-name").val();
    var leadRole=$("#lead-role").find('option:selected').attr("name");
    var industry=$("#industry").find('option:selected').attr("name");
    var companySize=$("#company-size").find('option:selected').attr("name");
    var timeline=$("#timeline").find('option:selected').attr("name");
    var engagement=$("#engagement").val();
    var score = parseInt($("#lead-role").val()) + parseInt($("#industry").val()) + parseInt($("#company-size").val()) + parseInt($("#timeline").val()) + parseInt($("#engagement").val());


    $("#name-output").text(contactName);
    $("#company-output").text(orgName);
    $("#role-output").text(leadRole);
    $("#vertical-output").text(industry);
    $("#size-output").text(companySize);
    $("#timeline-output").text(timeline);
    $("#engagement-output").text(engagement);
    $("#score-output").text(score);
    $("#total").text(score);

  });
});
