var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var level=0;
var started=false;
function playSound(url) {
  let audio = new Audio(url);
  audio.play();
}

function animatePress(btn){
    btn.addClass("pressed");
    setTimeout(() => {
        btn.removeClass("pressed")
    }, 100);
}


function nextSequnece() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  var newId = "#" + randomChosenColour;
  $(newId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound("sounds/" + randomChosenColour + ".mp3");
  level++;
  $("h1").text("level "+level);

}

$(document).keydown(() => {
  if (!started) {
    nextSequnece();
    $("h1").text("level "+level);
    started=true;
  }

});


$(".btn").click(function (e) {

//   var userChosenColour = e.target.id;
  var userChosenColour = $(this).attr("id");
//   $(this).addClass("pressed")
  animatePress($(this))
  playSound("sounds/" + userChosenColour + ".mp3");
  userClickedPattern.push(userChosenColour);
  
});
