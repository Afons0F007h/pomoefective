const pomodoro_ = document.querySelector("#pomodoro")
const break_ = document.querySelector("#break")
const start = document.querySelector("#start")

const count_label = document.querySelector("#pomodoro-count")
const wht_todo_label = document.querySelector("#wht-todo-label")

let hasBg_P = true;
let hasBg_B = false;

let count = 1;

let toFocus = "Time to focus!"
let forBreak = "Time for a break!"

wht_todo_label.innerHTML = toFocus
pomodoro_.style = 
"background-color: rgba(0,0,0,0.15);font-weight: 600;";

pomodoro_.addEventListener("click",()=> {
    pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";
    break_.style = "background-color: rgba(0,0,0,0);";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(186, 73, 73);";
    start.style = "color: rgb(186, 73, 73);";

    wht_todo_label.innerHTML = toFocus
})

break_.addEventListener("click",() => {
    pomodoro_.style = "background-color: rgba(0,0,0,0);";
    break_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(56, 133, 138);";
    start.style = "color: rgb(56, 133, 138);";

    wht_todo_label.innerHTML = forBreak
})

count_label.addEventListener("click",()=> {
    if(confirm("Reset pomodoro count?") ===true) {
        count = 1
        count_label.innerHTML = "#"+count
    } else {
        // TESTING PURPOSES
    }
})