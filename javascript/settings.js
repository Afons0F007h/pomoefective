const pomdur = document.querySelector("#pomDur")
const brDur = document.querySelector("#brDur")
const closeSets = document.querySelector("#close-settings")

pomdur.value = localStorage.getItem("pomodoro-duration")
brDur.value =  localStorage.getItem("break-duration")

closeSets.addEventListener("click",()=> {
    if(!(pomdur.value<=0||brDur.value<=0)) {
        window.location.href = 'index.html'

        localStorage.setItem("pomodoro-duration", pomdur.value)
        localStorage.setItem("break-duration", brDur.value)

    } else {
        alert("No valid values")
    }
})