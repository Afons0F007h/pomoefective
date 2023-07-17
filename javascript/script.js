const pomodoro_ = document.querySelector("#pomodoro")
const break_ = document.querySelector("#break")
const start = document.querySelector("#start")

const count_label = document.querySelector("#pomodoro-count")
const wht_todo_label = document.querySelector("#wht-todo-label")

const timer_label = document.querySelector("#timer")

let hasBg_P = true;
let hasBg_B = false;

let count = 1;

let toFocus = "Time to focus!"
let forBreak = "Time for a break!"

let timer = null;
let minutes = 30;
let seconds = 0;

let finish_audio = new Audio("sounds\\finished-round.wav")
let select_audio = new Audio("sounds\\select.wav")

reload_label()

wht_todo_label.innerHTML = toFocus
pomodoro_.style = 
"background-color: rgba(0,0,0,0.15);font-weight: 600;";

pomodoro_.addEventListener("click",()=> {
    pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";
    break_.style = "background-color: rgba(0,0,0,0);";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(186, 73, 73);";
    start.style = "color: rgb(186, 73, 73);";

    wht_todo_label.innerHTML = toFocus

    minutes = 30;
    seconds = 0;
    
    reload_label()
    stop_timer(timer)
})

break_.addEventListener("click",() => {
    pomodoro_.style = "background-color: rgba(0,0,0,0);";
    break_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(56, 133, 138);";
    start.style = "color: rgb(56, 133, 138);";

    wht_todo_label.innerHTML = forBreak

    minutes = 5;
    seconds = 0;

    stop_timer(timer)
    reload_label()
})

count_label.addEventListener("click",()=> {
    if(confirm("Reset pomodoro count?") ===true) {
        count = 1
        count_label.innerHTML = "#"+count
    } else {
        // TESTING PURPOSES
    }
})

start.addEventListener("click",()=> {
    if(!(minutes===0&&seconds)) {
        start_timer()
    }
    play_select()
})

function start_timer() {
    timer = setInterval(() => {  
        seconds--;
        if(seconds<0) {
            minutes--;
            seconds = 59;
        }else if(minutes<=0&&seconds<=0) {
            stop_timer(timer)
            play_finish()
        }

        reload_label()
    }, 1000);
}

function reload_label() {

    if(minutes.toString().length<=1) {
        if(minutes<10) minutes="0"+minutes;
    }
    if(seconds.toString().length<=1) {
        if(seconds<10) seconds="0"+seconds;
    }

    timer_label.innerHTML = `${minutes}:${seconds}`
}

function stop_timer(timer) {
    clearInterval(timer)
}

function play_finish() {
    finish_audio.play();
}

function play_select() {
    select_audio.play();
}