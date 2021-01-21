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
  
  function init(){
    //need to make the past present future color row effects//$H = 9,10,11,12,13,14,15,16,17 as 9,10,11,12,1,2,3,4,5
    if (whatTimeIsIt.$H == 9){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime9").css("background-color", "#ff6961");
      $("#task9").css("background-color", "#ff6961");
      $("#save9").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 9){
      //make it green it in the future
      $("#staticTime9").css("background-color", "#77dd77");
      $("#task9").css("background-color", "#77dd77");
      $("#save9").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 9){
      //make it green it in the future
      $("#staticTime9").css("background-color", "#d3d3d3");
      $("#task9").css("background-color", " #d3d3d3");
      $("#save9").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 10){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime10").css("background-color", "#ff6961");
      $("#task10").css("background-color", "#ff6961");
      $("#save10").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 10){
      //make it green it in the future
      $("#staticTime10").css("background-color", "#77dd77");
      $("#task10").css("background-color", "#77dd77");
      $("#save10").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 10){
      //make it green it in the future
      $("#staticTime10").css("background-color", "#d3d3d3");
      $("#task10").css("background-color", " #d3d3d3");
      $("#save10").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 11){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime11").css("background-color", "#ff6961");
      $("#task11").css("background-color", "#ff6961");
      $("#save11").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 11){
      //make it green it in the future
      $("#staticTime11").css("background-color", "#77dd77");
      $("#task11").css("background-color", "#77dd77");
      $("#save11").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 11){
      //make it green it in the future
      $("#staticTime11").css("background-color", "#d3d3d3");
      $("#task11").css("background-color", " #d3d3d3");
      $("#save11").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 12){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime12").css("background-color", "#ff6961");
      $("#task12").css("background-color", "#ff6961");
      $("#save12").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 12){
      //make it green it in the future
      $("#staticTime12").css("background-color", "#77dd77");
      $("#task12").css("background-color", "#77dd77");
      $("#save12").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 12){
      //make it green it in the future
      $("#staticTime12").css("background-color", "#d3d3d3");
      $("#task12").css("background-color", " #d3d3d3");
      $("#save12").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 13){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime1").css("background-color", "#ff6961");
      $("#task1").css("background-color", "#ff6961");
      $("#save1").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 13){
      //make it green it in the future
      $("#staticTime1").css("background-color", "#77dd77");
      $("#task1").css("background-color", "#77dd77");
      $("#save1").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 13){
      //make it green it in the future
      $("#staticTime1").css("background-color", "#d3d3d3");
      $("#task1").css("background-color", " #d3d3d3");
      $("#save1").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 14){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime2").css("background-color", "#ff6961");
      $("#task2").css("background-color", "#ff6961");
      $("#save2").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 14){
      //make it green it in the future
      $("#staticTime2").css("background-color", "#77dd77");
      $("#task2").css("background-color", "#77dd77");
      $("#save2").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 14){
      //make it green it in the future
      $("#staticTime2").css("background-color", "#d3d3d3");
      $("#task2").css("background-color", " #d3d3d3");
      $("#save2").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 15){
      //make it pink
      $("#staticTime3").css("background-color", "#ff6961");
      $("#task3").css("background-color", "#ff6961");
      $("#save3").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 15){
      //make it green it in the future
      $("#staticTime3").css("background-color", "#77dd77");
      $("#task3").css("background-color", "#77dd77");
      $("#save3").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 15){
      //make it green it in the future
      $("#staticTime3").css("background-color", "#d3d3d3");
      $("#task3").css("background-color", " #d3d3d3");
      $("#save3").css("background-color", " #d3d3d3");    
    }
    if (whatTimeIsIt.$H == 16){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime4").css("background-color", "#ff6961");
      $("#task4").css("background-color", "#ff6961");
      $("#save4").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 16){
      //make it green it in the future
      $("#staticTime4").css("background-color", "#77dd77");
      $("#task4").css("background-color", "#77dd77");
      $("#save4").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 16){
      //make it green it in the future
      $("#staticTime4").css("background-color", "#d3d3d3");
      $("#task4").css("background-color", " #d3d3d3");
      $("#save4").css("background-color", " #d3d3d3");    
    }

    if (whatTimeIsIt.$H == 17){
      //make 9 pink 
      //staticTime9 task9 save9
      $("#staticTime5").css("background-color", "#ff6961");
      $("#task5").css("background-color", "#ff6961");
      $("#save5").css("background-color", "#ff6961");
    }
    else if (whatTimeIsIt.$H < 17){
      //make it green it in the future
      $("#staticTime5").css("background-color", "#77dd77");
      $("#task5").css("background-color", "#77dd77");
      $("#save5").css("background-color", "#77dd77");
    }
    else if (whatTimeIsIt.$H > 17){
      //make it green it in the future
      $("#staticTime5").css("background-color", "#d3d3d3");
      $("#task5").css("background-color", " #d3d3d3");
      $("#save5").css("background-color", " #d3d3d3");    
    }
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

  init();
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