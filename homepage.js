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
if (nickname.trim() !== "") {
    localStorage.setItem("userNickname", nickname);
    alert("Nickname saved successfully!");
}