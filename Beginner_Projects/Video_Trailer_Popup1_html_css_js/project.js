
const photoContainerEl = document.getElementById("photo-container");
const videoContainerEl = document.getElementById("video-container");
const watchButton = document.getElementById("btn");
const crossButton = document.getElementById("cross");
const videoEl = document.getElementById("video");

watchButton.addEventListener("click", viewVideo);
function viewVideo() {
    photoContainerEl.classList.add("active");
    videoContainerEl.classList.remove("active");
}

crossButton.addEventListener("click", closeVideo);
function closeVideo() {
    videoContainerEl.classList.add("active");
    photoContainerEl.classList.remove("active");
    videoEl.pause();
    videoEl.currentTime = 0;
}