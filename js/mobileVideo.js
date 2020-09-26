var overlay_mobile = document.getElementById('overlay-mobile');
var vid_mobile = document.getElementById('video-mobile');

if (overlay_mobile.addEventListener) {
    overlay_mobile.addEventListener("click", play, false)
} else if (overlay_mobile.attachEvent) {
    overlay_mobile.attachEvent("onclick", play)
}

function play() {
    if (vid_mobile.paused) {
        vid_mobile.play();
        overlay_mobile.className = "o";
    } else {
        vid_mobile.pause();
        overlay_mobile.className = "";
    }
}