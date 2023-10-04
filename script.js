let timeDisplay = document.getElementById("time");
let dayDisplay = document.getElementById("day");
let middayDisplay = document.getElementById("midday");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
setInterval(()=>{
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = time.getDay();
    middayDisplay.innerHTML = "AM"
    if (sec<10){
        sec = "0" + sec;
    }
    if (min<10){
        min = "0" + min;
    }
    if(hr>=12){
        hr = hr - 12;
        middayDisplay.innerHTML = "PM";
    }
    if(hr == 0){
        hr = 12;
    }
    if (hr<10){
        hr = "0" + hr;
    }
    dayDisplay.innerHTML = weekday[day];
    timeDisplay.innerHTML = hr + ":" + min + ":" + sec;},1000)

