let playbtn= document.querySelector("button")
playbtn.addEventListener("click",function(){
    window.location.href="./index.html"
})

var musicButton = document.getElementById('music-button');
var myAudio = document.getElementById('myAudio');

musicButton.addEventListener('click', function () {
if (myAudio.paused) {
    myAudio.play();
}else{
    myAudio.pause();
}});

var inputElement = document.getElementById("nicknameInput");
var nickname = inputElement.value;
localStorage.setItem("userNickname", nickname);

let instruction = document.getElementById("instructionbtn");
instruction.addEventListener("click", function() {
    alert("INSTRUCTION:- Press any Arrow key to start the game... \nGOOD LUCK!!!");
});

