var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false)
} else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play)
}

function play() {
    if (vid.paused) {
        vid.play();
        overlay.className = "o";
    } else {
        vid.pause();
        overlay.className = "";
    }
}

// burger

const body = document.getElementById('body')
const menu = document.getElementById("mobile-overlay")
menu.classList.add('hide');
document.getElementById("burger-menu").addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("open")) {
        event.currentTarget.classList.remove("open");
        menu.classList.add('hide');
        body.style.overflow = 'scroll';
    } else {
        event.currentTarget.classList.add("open");
        menu.classList.remove('hide');
        body.style.overflow = 'hidden';
    }
});
