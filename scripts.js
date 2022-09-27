// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {

    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let rocket = document.getElementById('rocket');

    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '250px';
    

 let takeoffButton = this.document.getElementById("takeoff");
 takeoffButton.addEventListener('click', function(){
 let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
 if (isReady){
    flightStatus.innerHTML = "Shuttle in flight";
    shuttleBackground.style.backgroundColor = "blue";
   shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
 }
 });

 let landButton = this.document.getElementById('landing');
 landButton.addEventListener('click', function(){
    let isLanding = window.confirm("The shuttle is landing. Landing gear engaged.");
    if (isLanding){
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = '0px';
    }
 });

 let abortButton = this.document.getElementById('missionAbort');
 abortButton.addEventListener('click', function(){
    let abort = window.confirm("Confirm that you want to abort the mission.");
    if(abort){
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = '0px';
        rocket.style.left = '250px';
    }
 });

 let upButton = this.document.getElementById('up');
 upButton.addEventListener('click', function(){
 rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
 shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
 });

 let downButton = this.document.getElementById('down');
 downButton.addEventListener('click', function(){
 rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
 shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
 });

 let rightButton = this.document.getElementById('right');
 rightButton.addEventListener('click', function(){
    rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
 });

 let leftButton = this.document.getElementById('left');
 leftButton.addEventListener('click', function(){
    rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
 });




});
