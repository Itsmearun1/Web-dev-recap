var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
function playSound(url) {
  let audio = new Audio(url);
  audio.play();
}

function animatePress(btn) {
  btn.addClass("pressed");
  setTimeout(() => {
    btn.removeClass("pressed");
  }, 100);
}

function nextSequnece() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern, userClickedPattern);
  var newId = "#" + randomChosenColour;
  console.log(newId)
  $(newId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3");
  level++;
  $("h1").text("level " + level);
}

$(document).keydown(() => {
  if (!started) {
    nextSequnece();
    $("h1").text("level " + level);
    started = true;
  }
  else{
    console.log("trial")
  }
});

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");
  animatePress($(this));
  playSound("sounds/" + userChosenColour + ".mp3");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern, gamePattern);
  if (gamePattern.length >= 1) {
    for (let i = 0; i < userClickedPattern.length - 1; i++) {
      console.log(userClickedPattern[i], gamePattern[i]);
      if (userClickedPattern[i] !== gamePattern[i]) {
        console.log("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        started = false;
        gamePattern = [];
        userClickedPattern = [];
        level=0;
        return;
      }
    }
  }
  if (started) {
    setTimeout(() => {
      nextSequnece();
    }, 2000);
  }

});

