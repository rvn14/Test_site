


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

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} `;

}

setInterval(rtClock,1000);

