var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

//function to start the game
$(document).keydown(() => {
  if (!started) {
    nextSequnece();
    started = true;
  }
});

//Function to play the sound
function playSound(url) {
  let audio = new Audio(url);
  audio.play();
}

//function to animate the pressed button
function animatePress(btn) {
  btn.addClass("pressed");
  setTimeout(() => {
    btn.removeClass("pressed");
  }, 100);
}
//function to create the sequence of colors
function nextSequnece() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  var newId = "#" + randomChosenColour;
  $(newId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3");
  // console.log(userClickedPattern, gamePattern);
  level++;
  $("h1").text("level " + level);
}

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");
  animatePress($(this));
  playSound("sounds/" + userChosenColour + ".mp3");
  userClickedPattern.push(userChosenColour);
  checkPattern();
  // userClickedPattern = [];
  // setTimeout(() => {
  //   nextSequnece();
  // }, 1000);

  console.log(userClickedPattern, gamePattern);
});

// function to check whether the pattern is correct or not
function checkPattern() {
  for (let i = 0; i <= userClickedPattern.length - 1; i++) {
    // console.log(userClickedPattern[i], gamePattern[i]);
    if (userClickedPattern[i] !== gamePattern[i]) {
      console.log("wrong");
      $("h1").text("Game Over, Press Any Key to Restart");
      started = false;
      gamePattern = [];
      userClickedPattern = [];
      level = 0;
      return;
    }
  }
  nextSequnece();
}
