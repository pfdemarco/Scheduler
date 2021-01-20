$(document).ready(function() {
  //globals here
 
  //make a past, present future var or make a 9-5 json object
  //functions here 
  function setTime(){
    var timerInterval = setInterval(function(){
      let nnow = dayjs();
      let topr = $('#dispdate');
      topr.text(nnow.$d);
    },1000);
  }  
  
  //if any button on the form is clicked save the data from 
  $(".clsForm button").on("click", function(){
    //console.log(this);
    const y = $(this);
    let desc = y.siblings(".form-grouptime").children(".description").val();
    let timeBlock = y.siblings(".form-group").children(".time-block").val();

    window.localStorage.setItem("Time: " + timeBlock , " Task: " + desc);
    //console.log(y.siblings(".form-grouptime"));
    console.log(y.siblings(".form-grouptime").children(".description").val());
    console.log(y.siblings(".form-group").children(".time-block").val());
  });

  //window.localStorage.clear;  //dont do this per instructions but it would be maybe something to include in init()

  setTime();//all function callers go here

}); 




// $("#save9").on("click", function(){
  //   let x = $(".clsForm");
  //   console.log(x.serializeArray());
  //   console.log(x);
  //   //console.log(x.serializeArray()[0])
  //   console.log(x.serializeArray())
  // });




// var timerInterval = setInterval(setTime, 1000);

  // function setTime() {
  //   let nnow = dayjs();
  //   let topr = $('#dispdate');
  //   // Sets interval in variable
  //   topr.text(nnow.$d);
  // }