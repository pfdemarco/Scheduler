$(document).ready(function() {
  //globals here
  let ninetofive = {
    nine:"9AM",
    ten:"10AM",
    eleven:"11AM",
    twelve:"12PM",
    one:"1PM",
    two:"2PM",
    three:"3PM",
    four:"4PM",
    five:"5PM"
  }
  //make a past, present future var or make a 9-5 json object
  //functions here 
  function setTime(){
    var timerInterval = setInterval(function(){
      let nnow = dayjs();
      let topr = $('#dispdate');
      topr.text(nnow.$d);
    },1000);
  }  
  
  setTime();//all function callers go here

}); 








// var timerInterval = setInterval(setTime, 1000);

  // function setTime() {
  //   let nnow = dayjs();
  //   let topr = $('#dispdate');
  //   // Sets interval in variable
  //   topr.text(nnow.$d);
  // }