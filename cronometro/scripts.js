var display = document.getElementById('display');
var interval;
var seconds = 0;
var minutes = 0;
var hours = 0;
function zero(number) {
    if (number < 10) {
        return ('0' + number)
    }
    else {
        return (number)
    }
}
function counter() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    display.innerText = zero(hours) + ':' + zero(minutes) + ':' + zero(seconds);
}
function start() {
    interval = setInterval(counter, 1000);
    console.log('Counter has been start');
}
function pause() {
    clearInterval(interval);
    console.log('Counter has been pause');
}
function reset(interval) {
    clearInterval(interval);
    display.innerText = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
    console.log('Counter has been reset');
}
