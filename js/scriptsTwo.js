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
    var leadInput=[];
    var timelineInput=[];

    // lead-role industry company-size timeline
    ///Input///
    var roleTypeInput=$("#lead-role").find('option:selected').attr("name");
    var industry=$("#industry").find('option:selected').attr("name");
    var companySize=$("#company-size").find('option:selected').attr("name");
    var timeline=$("#timeline").find('option:selected').attr("name");
    var engagement=$("#engagement").find('option:selected').attr("name");
    var score = $("#lead-role").val() + $("#industry").val() + $("#company-size").val() + $("#timeline").val() + $("#engagement").val();

    alert(roleTypeInput, industry, companySize, timeline, engagement, score);



    ///Send to Business End///
    var newLeadObject= new LeadObjectMaker(pizzaCount,roleTypeInput,leadInput,timelineInput, scoreInput);


    ///Output///
    ///Order///
    var pizzaPrice = newLeadObject.leadMath(roleTypeInput);
    orderTotal += pizzaPrice;
    if ((newLeadObject.industry.length + newLeadObject.timeline.length)===0) {
      orders.push("- Your " + orderCounter(pizzaCount) + " pie is a " + newLeadObject.roleType + " " + dollaBillz(pizzaPrice) + "<br>");
      ordersForReceipt.push(newLeadObject.roleType + " " + dollaBillz(pizzaPrice));
      $("#order-checkout").append(orders[pizzaCount-1]);
    }
    else {
      orders.push(andAdder(("- Your " + orderCounter(pizzaCount) + " pie is a " + newLeadObject.roleType + " with" + newLeadObject.industry + newLeadObject.timeline + " " + dollaBillz(pizzaPrice) + "<br>"),2))
      ordersForReceipt.push(andAdder((newLeadObject.roleType + " with" + newLeadObject.industry + newLeadObject.timeline + " " + dollaBillz(pizzaPrice)),2));
      $("#order-checkout").append(orders[pizzaCount-1]);
    }
    pizzaCount+=1;
    $("#total").text(dollaBillz(orderTotal));
  });
  //order-form.submit

    // payment-info.submit
    $("#order-delete").click(function(){
      event.preventDefault();
      pizzaCount=1;
      orderTotal=0;
      orders=[];
      ordersForReceipt=[];
      $("#order-checkout").text("");
      $("#total").text("");
      $('input:checkbox[name=industry]').last().attr('checked',false);
      $('input:checkbox[name=special-industry]').last().attr('checked',false);
    })
});
