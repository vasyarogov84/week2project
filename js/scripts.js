$(document).ready(function() {
  $(".btn").click(function() {

var q1 = $("input:radio[name=q1]:checked").val();
var q2 = $("input:radio[name=q2]:checked").val();
var q3 = $("input:radio[name=q3]:checked").val();
var q4 = $("input:radio[name=q4]:checked").val();
var q5 = $("input:radio[name=q5]:checked").val();


var result = q1 + q2 + q3 + q4 + q5

var Java = ( result.match(/A/g)||[]).length
var Ruby = ( result.match(/B/g)||[]).length
var pHP = ( result.match(/C/g)||[]).length



  if (Java >= 3 && Java >= Ruby && Java >= pHP){
  $(".Java").fadeIn();
}  else if (Ruby >= 3 && Ruby >= pHP){
  $(".Ruby").fadeIn();
}  else {
  $(".PHP").fadeIn();
}



});
  $(".Java").mouseenter(function() {
    $(".Java").fadeOut();
  });
  $(".Ruby").mouseenter(function() {
      $(".Ruby").fadeOut();
  });
  $(".PHP").mouseenter(function() {
    $(".PHP").fadeOut();
  });
});
