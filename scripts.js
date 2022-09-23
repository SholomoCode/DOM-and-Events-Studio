// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {







 let takeoffButton = this.document.getElementById("takeoff");
 takeoffButton.addEventListener('click', function(){
 response = window.confirm("Confirm that the shuttle is ready for takeoff.");
 if(response){
bg.style.backgroundColor = "blue";
shuttleHeight.innerHTML = "10000";
flightStatus.innerHTML = "Shuttle in flight";

 }
 });




});
