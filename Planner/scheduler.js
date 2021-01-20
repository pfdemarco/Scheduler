$(document).ready(function() {
  //globals here
  let whatTimeIsIt = dayjs();

  //make a past, present future var or make a 9-5 json object
  //functions here 
  function setTime(){
    var timerInterval = setInterval(function(){
      let nnow = dayjs();
      let topr = $('#dispdate');
      topr.text(nnow.$d);
    },1000);
  }  
  
  //need to make the past present future color row effects//$H = 9,10,11,12,13,14,15,16,17 as 9,10,11,12,1,2,3,4,5
  if (whatTimeIsIt.$H == 15){
    //make 9 pink 
    //staticTime9 task9 save9
    $("#staticTime2").css("background-color", "#ff6961");
    $("#task2").css("background-color", "#ff6961");
    $("#save2").css("background-color", "#ff6961");
  }


  //if any button on the form is clicked save the data from description and time-block into teh local storage
  //this is the most beautiful thing ever and it just clicked with me
  //I have a clsForm in clsForm are several buttons that I have access to ALL OF TE BUTTONS HERE now when I click on one 
  //I can use THIS to reference the individual button clicked and then set this.siblings(".form-grouptime").children(".description").val()); and timeblock .val into windows local storage
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
  //console.log(whatTimeIsIt.$H);
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