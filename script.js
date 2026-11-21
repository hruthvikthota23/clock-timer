const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["January","February","March","April","May","June","July","Auguest","September","October","November","December"];

function pad(input){
    if(input<10){
        return "0" + input;
    }
    return input;
}

function clock(){
    const now=new Date();
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let ampm="AM";
    if(hour>=12){
        ampm="PM";
    }
    hour=hour%12;
    if(hour===0){
        hour=12;
    }
    const timeText=pad(hour) + ":" + pad(min) + ":" + pad(sec) + " " + ampm;
    document.getElementById("time").textContent=timeText;
}
clock();
setInterval(clock, 1000);

function date(){
    const now=new Date();
    let day=now.getDay();
    let date=now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear();

    const dateText=days[day] + ", " + pad(date) + " " + months[month] + " " + year;
    document.getElementById("date").textContent=dateText;
}
date();
setInterval(date, 24 * 60 * 60 * 1000);

//Countdown Timer
const input=document.getElementById("minutes");
const timer=document.getElementById("timer");
const start=document.getElementById("startBtn");
const pause=document.getElementById("pauseBtn");
const reset=document.getElementById("resetBtn");

let count;
let min;
let sec;

// const updateTimer=()=>{
//     console.log("Time update");
//     count=Number(input.value)*60;
//     min =Math.floor(count/60);
//     sec=count%60;
//     timer.textContent=pad(min) + " : " + pad(sec);
// }

let interval;


const startTimer=()=>{
    console.log("Start");
    clearInterval(interval);
    count=Number(input.value)*60;
    
    interval = setInterval(()=>{
        min=Math.floor(count/60);
        sec=count%60;
        timer.textContent= pad(min) + " : " + pad(sec);
        count--;
        if(count<=0){
            clearInterval(interval);
            interval=null;
            timer.textContent=pad(min) + " : " + pad(sec);
        }
    },1000)
    
};

const pausetTimer=()=>{
    console.log("Pause");
    if(interval){
        clearInterval(interval);
        interval=null;
    }
}

const resetTimer=()=>{
    console.log("Reset");
    count=Number(input.value)*60;
    clearInterval(interval);
    interval=null;
    min=Math.floor(count/60);
    sec=count%60;
    timer.textContent= pad(min) + " : " + pad(sec);
}

// input.addEventListener("input",updateTimer);
start.addEventListener("click",startTimer);
pause.addEventListener("click",pausetTimer);
reset.addEventListener("click",resetTimer);