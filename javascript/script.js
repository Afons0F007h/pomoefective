const pomodoro_ = document.querySelector("#pomodoro")
const break_ = document.querySelector("#break")
const start = document.querySelector("#start")

const count_label = document.querySelector("#pomodoro-count")
const wht_todo_label = document.querySelector("#wht-todo-label")

const timer_label = document.querySelector("#timer")

let hasBg_P = true;
let hasBg_B = false;

let rounds_count = 1;

let toFocus = "Time to focus!"
let forBreak = "Time for a break!"

let timer = null;
let minutes = 0;
let seconds = 0;

let _pomodoro = {
    minutes: 0,
    seconds: 5
}

let _break = {
    minutes: 0,
    seconds: 2
}

let finish_audio = new Audio("sounds\\finished-round.wav")
let select_audio = new Audio("sounds\\select.wav")

finish_audio.volume = 0.1

let pom_type = "start"
let state = "br"

minutes = _pomodoro.minutes;
seconds = _pomodoro.seconds;

reload_label()

wht_todo_label.innerHTML = toFocus
pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

pomodoro_.addEventListener("click",()=> {
    pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";
    break_.style = "background-color: rgba(0,0,0,0);";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(186, 73, 73);";

    wht_todo_label.innerHTML = toFocus

    minutes = _pomodoro.minutes;
    seconds = _pomodoro.seconds;
    
    reload_label()
    pause_timer(timer)
    state = "br"
})

break_.addEventListener("click",() => {
    pomodoro_.style = "background-color: rgba(0,0,0,0);";
    break_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(56, 133, 138);";

    wht_todo_label.innerHTML = forBreak

    minutes = _break.minutes;
    seconds = _break.seconds;

    pause_timer(timer)
    reload_label()

    state = "pom"
})

count_label.addEventListener("click",()=> {
    if(confirm("Reset pomodoro count?") ===true) {
        rounds_count = 1
        count_label.innerHTML = "#"+rounds_count
    } else {
        // TESTING PURPOSES
    }
})

start.addEventListener("click",()=> {
    if(start.textContent === "start") {
        if(!(minutes===0&&seconds===0)) {
            start_timer()
            pom_type = "started"
        }
        play_select()
        start.innerHTML = "pause"
        change_butStyle(pom_type)
    } else if(start.textContent === "pause") {
        pom_type = "paused"
        pause_timer(timer)
        play_select()
        start.innerHTML = "start"
    }
})

function start_timer() {
    timer = setInterval(() => {  
        seconds--;
        if(seconds<0) {
            minutes--;
            seconds = 59;
        }else if(minutes<=0&&seconds<=0) {
            pause_timer(timer)
            play_finish()
            changeState(state)
            if(state==="br") {
                rounds_count++;
                count_label.innerHTML="#"+rounds_count;
            }
            start.innerHTML = "start"
            pom_type="paused"
            change_butStyle(pom_type)
        }

        reload_label()
    }, 1000);
}

function change_butStyle(type) {
    if(type==="started") {
        start.style = "box-shadow: none; transform: translateY(5px);";
    } else if(type==="paused") {
        start.style = "box-shadow: rgb(235, 235, 235) 0px 6px 0px; transform: translateY(-5px);";
    }
    
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

function pause_timer(timer) {
    clearInterval(timer)
}

function play_finish() {
    finish_audio.play();
}

function play_select() {
    select_audio.play();
}

function createForwardOpt() {
    // Creates a button in the right side of the start button that lets the user
    // complete the pomodoro session in one click
}

function changeState(current_state) {
    if(current_state==="pom") {
        pomodoro_.click();
    } else if(current_state==="br") {
        break_.click();
    }
}