var video = document.querySelector("video");
let slider = document.querySelector("#slider");

function updateVolume(){
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value + "%";
}

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	updateVolume();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = slider.value/100;
});

document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
});

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = !video.muted;
});

slider.addEventListener("input", function(){
	updateVolume();
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
