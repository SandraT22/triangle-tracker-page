$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const number3 = parseInt($("#input3").val());

    if (number1 === number2 && number1 === number3) {
      $("#equilateral").show();
    } else if (number1 === number2 && number1 !== number3 || numner2 === number1 && number2 !== number3 || number3 === number1 && number3 !== number2) {
      $("#isosceles").show(); 
    } else if (number1 !== number2 && number1 === number3 || number2 !== number3 && number2 === number1 || number3 !== number1 && number3 === number2) {
      $("#scalene").show();
    } else {
      $("#notATriangle").show();
      }
  });
  $(".clickable").click(function() {
    $("#equilateral-show").toggle();
    $("#triangle-hidden").toggle();
  })
  $(".clickable").click(function() {
    $("#isosceles-show").toggle();
    $("#triangle-hidden").toggle();
  })
  $(".clickable").click(function() {
    $("#scalene-show").toggle();
    $("#triangle-hidden").toggle();
  })
  $(".clickable").click(function() {
    $("#notATriangle-show").toggle();
    $("#triangle-hidden").toggle();
  })
});
