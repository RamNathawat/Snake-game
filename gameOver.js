const score = localStorage.getItem("score");
const highScore = localStorage.getItem("high-score");

document.getElementById("finalScore").innerText = score;
document.getElementById("finalHighScore").innerText = highScore;
let playbtn= document.querySelector("button")
playbtn.addEventListener("click",function(){
    window.location.href="./homepage.html"
})

// window.onload = function () {
// var savedNickname = localStorage.getItem("userNickname");
// if (savedNickname) {
//     document.getElementById("nicknameInput").value = savedNickname;
// }};

window.onload = function () {
    // Retrieve the saved nickname from local storage
    var savedNickname = localStorage.getItem("userNickname");

    // Check if a nickname is saved
    if (savedNickname) {
        // Display the saved nickname
        alert("Nickname from localStorage: " + savedNickname);
    } else {
        // Display a message if no nickname is saved
        alert("No nickname saved.");
    }
};