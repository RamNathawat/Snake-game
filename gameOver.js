const score = localStorage.getItem("score");
const highScore = localStorage.getItem("high-score");

document.getElementById("finalScore").innerText = score;
document.getElementById("finalHighScore").innerText = highScore;
let playbtn= document.querySelector("button")
playbtn.addEventListener("click",function(){
    window.location.href="./homepage.html"
})