//business logic

////LeadObjectMaker ////
function Lead (leadName, organizationName, employeeNumber, roleType, industry, timeline, engagement, score) {
  this.leadName=leadName;
  this.organizationName=organizationName;
  this.employeeNumber=employeeNumber;
  this.roleType= roleType;
  this.industry= industry;
  this.timeline= timeline;
  this.engagement= engagement;
  this.score=score;
}

// NOTE: ADD YOUR DATABASE/CRM API SAVING METHOD HERE //

//

// user interface logic
$(document).ready(function() {

  ///submit event///
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    ///Input///
    var contactName=$("#contact-name").val();
    var orgName=$("#org-name").val();
    var leadRole=$("#lead-role").find('option:selected').attr("name");
    var industry=$("#industry").find('option:selected').attr("name");
    var companySize=$("#company-size").find('option:selected').attr("name");
    var timeline=$("#timeline").find('option:selected').attr("name");
    var emailOpen=0;
    if ($("#emailOpen").is(':checked')){
      emailOpen=$('#emailOpen').val();
    }
    var websiteVisit=0;
    if ($("#websiteVisit").is(':checked')){
      websiteVisit=$('#websiteVisit').val();
    }
    var blogPostRead=0;
    if ($("#blogPostRead").is(':checked')){
      blogPostRead=$('#blogPostRead').val();
    }
    var whitePaperDownload=0;
    if ($("#whitePaperDownload").is(':checked')){
      whitePaperDownload=$('#whitePaperDownload').val();
    }
    var positiveResponse=0;
    if ($("#positiveResponse").is(':checked')){
      positiveResponse=$('#positiveResponse').val();
    }
    var answeredCall=0;
    if ($("#answeredCall").is(':checked')){
      answeredCall=$('#answeredCall').val();
    }
    var leadReachedOutByEmailPhone=0
    if ($("#leadReachedOutByEmailPhone").is(':checked')){
      leadReachedOutByEmailPhone=$('#leadReachedOutByEmailPhone').val();
    }

    // emailOpen websiteVisit blogPostRead whitePaperDownload positiveResponse answeredCall leadReachedOutByEmailPhone

    var engagement=  parseInt(emailOpen) + parseInt(websiteVisit) + parseInt(blogPostRead) + parseInt(whitePaperDownload) + parseInt(positiveResponse) + parseInt(answeredCall) + parseInt(leadReachedOutByEmailPhone) + parseInt($("#engagement").val());

    var score = parseInt($("#lead-role").val()) + parseInt($("#industry").val()) + parseInt($("#company-size").val()) + parseInt($("#timeline").val()) + engagement;

    var newLead = new Lead(contactName, orgName, companySize, leadRole, industry, timeline, engagement, score);

    // NOTE: IMPLEMENT YOUR DATABASE SAVING METHOD HERE FOR THE newLead ...


    //

    // Output
    $(".name-output").text(contactName);
    $(".company-output").text(orgName);
    $(".role-output").text(leadRole);
    $(".vertical-output").text(industry);
    $(".size-output").text(companySize);
    $(".timeline-output").text(timeline);
    $(".engagement-output").text(engagement);
    $(".score-output").text(score);


  });
});
