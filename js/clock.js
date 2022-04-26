// alert('test');

/*
    author: Riley Eyrich
    date: 4/26/22
    title: clock
*/

/*
FUNCTIONS TO DISPLAY CURRENT TIME ON CLOCK FACE
*/

var dispMin = document.getElementById('hrs');
var dispHrs = document.getElementById('mins');
var dispAmPm = document.getElementById('amPM');

window.onload = dispClock;

//sync interval with current time by starting interval at the start of the next minute
var now = new Date();
console.log(now);
var sec = now.getSeconds();
var offSet = ((60 - sec) * 1000);

var startTime = setTimeout(refresh, offSet);

//setting the interval to retrieve time every minute
function refresh() {
    setInterval(dispClock, 60000);
}

function dispClock(){
    var now = new Date();
    //console.log(now);//console.log confirmed interval starts on the new minute
    var hour = now.getHours();
    var pm;
    //set to AM/PM format and determine if PM is true
    if(hour>12){
        hour = hour - 12;
        pm = true;
    }

    dispHrs.innerHTML = hour;

    if (pm = true){
        dispAmPm.innerHTML = "PM"
    }else{
        dispAmPm.innerHTML = "AM"
    }

    var min = now.getMinutes();
    dispMin.innerHTML = min;
}

/*
    FUNCTIONS TO SET ALARM
*/
