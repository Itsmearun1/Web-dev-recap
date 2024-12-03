var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let title = document.querySelector("h1");
let name1 = "dice" + randomNumber1;
let name2 = "dice" + randomNumber2;
img1.setAttribute("src", `./images/${name1}.png`);
img2.setAttribute("src", `./images/${name2}.png`);
if (randomNumber1 > randomNumber2) {
    console.log(randomNumber1,randomNumber2)
  title.textContent = "🚩 Player 1 wins!";
} 
else if (randomNumber1 < randomNumber2) {
    console.log(randomNumber1,randomNumber2)
  title.textContent = "Player 2 wins! 🚩";
} 
else {
    console.log(randomNumber1,randomNumber2)
  title.textContent = "It's a tie!";
}
