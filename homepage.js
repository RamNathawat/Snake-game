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