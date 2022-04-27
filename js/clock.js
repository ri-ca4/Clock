// alert('test');

/*
    author: Riley Eyrich
    date: 4/26/22
    title: clock
*/

/*
FUNCTIONS TO DISPLAY CURRENT TIME ON CLOCK FACE
*/

var dispMin  = document.getElementById('mins');
var dispHrs  = document.getElementById('hrs');
var dispAmPm = document.getElementById('amPM');
var num      = document.getElementsByClassName('num');

window.onload = dispClock;

//sync interval with current time by starting interval at the start of the next minute
var now    = new Date();
var sec    = now.getSeconds();
var offSet = ((60 - sec) * 1000); //the number of milliseconds before the new minute
var startTime = setTimeout(refresh, offSet);

//setting the interval to retrieve time every minute
function refresh() {
    setInterval(dispClock, 60000);
}

//display clock in hr/min format
function dispClock(){
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    //set to AM/PM format and determine if PM is true
    if(hour>12){
        var hour = hour - 12;
        dispAmPm.innerHTML = "PM"
    }else{
        var pm = false;
        dispAmPm.innerHTML = "AM"
    }

    dispHrs.innerHTML = hour;
    if (min < 10){
        dispMin.innerHTML = '0' + min;
    }else{
        dispMin.innerHTML = min;
    }
}

/*
    Animations
*/


/*
    FUNCTIONS TO SET ALARM
*/
