let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  var audio = new Audio("sounds/tom-1.mp3");
  function checker(n) {
    switch (n) {
      case "w":
        new Audio("sounds/tom-1.mp3").play();
        break;
      case "a":
        new Audio("sounds/tom-2.mp3").play();
        break;
      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-4.mp3").play();
        break;
      case "j":
        new Audio("sounds/snare.mp3").play();
        break;
      case "k":
        new Audio("sounds/crash.mp3").play();
        break;
      case "l":
        new Audio("sounds/kick-bass.mp3").play();
        break;

      default:
        break;
    }
  }
  //function to animate
  function bAnimation(btn){
    document.querySelector("."+btn).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+btn).classList.remove("pressed");
    }, 100);
  }
  buttons[i].addEventListener("click", function () {
    var bVal = this.innerHTML;
    checker(bVal);
    bAnimation(bVal);
  });

  document.addEventListener("keydown", function (e) {
    var val=e.key;
    checker(val);
    bAnimation(val)
  });
}

  function bAnimation(btn){
    document.querySelector("."+btn).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+btn).classList.remove("pressed");
    }, 100);
  }
  buttons[i].addEventListener("click", function () {
    var bVal = this.innerHTML;
    checker(bVal);
    bAnimation(bVal);
  });

  document.addEventListener("keydown", function (e) {
    var val=e.key;
    checker(val);
    bAnimation(val)
  });
}
