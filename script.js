var minutesField = $('.amtTime');
var timerButton = $('.startButton');
var alarm = new Audio("bell.mp3");
var endCredits = $('.endText');
var colorInput = $('.colorPicker');
var colorButton = $('.changeBtn');
var pageBody = $('body');



//color picker
colorButton.on("click", changeColor);

function changeColor() {
  var newColor = colorInput.val();
  pageBody.css("background-color", newColor);
}


//timer start
//timerButton.on("click",stopTimer);
timerButton.on("click",studyTimer);

//stop timer
//function stopTimer() {
  //break studyTimer;
//}

//timer function
function studyTimer() {
  // Change the minutes and seconds to starting time
  session_minutes = minutesField.val() - 1;
  //session_minutes = 0;
  session_seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        //endCredits.html("STOP");
          //"Session Completed!! Take a Break";

        // Make the html message div visible
        endCredits.css("visibility","visible");

        // PLay the bell sound to tell the end of session
        alarm.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}


// variables

var textField = $('.subField');
var submitButton = $('.subButton');
var taskList = $('.taskList');

// event listener

submitButton.on("click", addTaskCard);

taskList.on("click", deleteCard);

//function

function addTaskCard() {
  var toDoWords = textField.val();
  // appends
  taskList.append(`<div class="taskCard">
    <p>- ${toDoWords}</p>
    <button class="delete">delete</button>
  </div>`);
  
}

function deleteCard() {
  if (event.target.className === "delete") {
    //actually gets the specific card the user wants to delete
    event.target.parentNode.remove(); 
  }
}

