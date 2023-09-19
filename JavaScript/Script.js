const hours = document.getElementsByClassName('Hours')[0];
const minutes = document.getElementsByClassName('Minutes')[0];
const seconds = document.getElementsByClassName('Seconds')[0];

const watch = setInterval(function time(){

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hour <10) hour = `0${hour}`;
    if (min <10) min = `0${min}`;
    if (sec <10) sec = `0${sec}`;

    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;

})