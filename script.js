


function rtClock() {

    var dateObj = new Date();

    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var seconds = dateObj.getSeconds();

    var zone = ( hours<12) ? "AM" : "PM";

    // hours = (hours > 12) ? hours-12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    

}

function toggle() {
    var blur = document.getElementById('content');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

const blurimg = document.getElementById('popup');
const img =document.querySelector('img');

function loaded() {
    blurimg.classList.add("loaded");
}

if (img.complete) {
    loaded()
} else {
    img.addEventListener("load",loaded);
}




setInterval(rtClock, 1000);