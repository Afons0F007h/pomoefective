const pomodoro_ = document.querySelector("#pomodoro")
const break_ = document.querySelector("#break")
const start = document.querySelector("#start")

let hasBg_P = true;
let hasBg_B = false;
pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

pomodoro_.addEventListener("click",()=> {
    pomodoro_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";
    break_.style = "background-color: rgba(0,0,0,0);";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(186, 73, 73);";
    start.style = "color: rgb(186, 73, 73);";
})

break_.addEventListener("click",() => {
    pomodoro_.style = "background-color: rgba(0,0,0,0);";
    break_.style = "background-color: rgba(0,0,0,0.15);font-weight: 600;";

    document.getElementsByTagName("body")[0].style = "background-color: rgb(56, 133, 138);";
    start.style = "color: rgb(56, 133, 138);";
})