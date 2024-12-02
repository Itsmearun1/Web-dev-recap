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

//function to check the pattern

function nextSequnece() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  var newId = "#" + randomChosenColour;
  $(newId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3");
  console.log(userClickedPattern, gamePattern, "from check pattern");
  level++;
  $("h1").text("level " + level);
}

//function to act on button click

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");
  animatePress($(this));
  playSound("sounds/" + userChosenColour + ".mp3");
  userClickedPattern.push(userChosenColour);
  checkPattern();
  if (started && userClickedPattern.length === 0) {
    setTimeout(() => {
      nextSequnece();
    }, 1000);
  } else {
    return;
  }
  console.log(userClickedPattern, gamePattern, "from button click");
});

//function to check the pattern is correct or not

function checkPattern() {
  if (userClickedPattern[userClickedPattern.length-1] !== gamePattern[userClickedPattern.length-1]) {
    console.log("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    playSound("sounds/wrong.mp3");
    $("h1").text("Game Over, Press Any Key to Restart");
    started = false;
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    return;
  }
  if (userClickedPattern.length === gamePattern.length) {
    userClickedPattern = [];
  }
}
