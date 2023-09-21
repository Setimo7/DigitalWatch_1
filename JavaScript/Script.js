const hours = document.getElementsByClassName('Hour')[0];
const minutes = document.getElementsByClassName('Minute')[0];
const seconds = document.getElementsByClassName('Second')[0];

const DayDiv = document.getElementsByClassName('Datetdy')[0];

const Data = setInterval (function formataData(){

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let Year = date.getFullYear();
    let WeekDay = date.getDay();

    let Daytoday;

    switch (WeekDay){
        case 0:
            Daytoday = 'Sunday';
        break;

        case 1:
            Daytoday = 'Monday';
        break;

        case 2:
            Daytoday = 'Tuesday';
        break;
        
        case 3:
            Daytoday = 'Wednesday';
        break;

        case 4:
            Daytoday = 'Thursday';
        break;

        case 5:
            Daytoday = 'Friday';
        break;

        case 6:
            Daytoday = 'Saturday';
        break;
    }

    let monthText;

    switch (month){
        case 1:
            monthText = 'January';
        break;

        case 2:
            monthText = 'February';
        break;

        case 3:
            monthText = 'March';
        break;

        case 4:
            monthText = 'April';
        break;

        case 5:
            monthText = 'May';
        break;

        case 6:
            monthText = 'June';
        break;

        case 7:
            monthText = 'July';
        break;

        case 8:
            monthText = 'August';
        break;

        case 9:
            monthText = 'September';
        break;

        case 10:
            monthText = 'October';
        break;

        case 11:
            monthText = 'November';
        break;

        case 12:
            monthText = 'December';
        break;
    }
    DayDiv.textContent = `Today is ${Daytoday}, ${monthText} ${day}, ${Year}`;
    
})

const Watch = setInterval(function time(){

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