const shift = document.getElementById("shift");
const backspace = document.getElementById("backspace");
let output = document.getElementById("outputText");
const keys = document.querySelectorAll(".key");

let isShiftActive = false;

keys.forEach(
    key => {
        key.addEventListener("click", () => {

            if (key.textContent === "Shift") {
                isShiftActive = !isShiftActive;
                toggleKey(key)
            } else if (key.textContent === "Backspace") {
                output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length -1);
            } else {
                isShiftActive ? output.innerHTML = output.innerHTML + key.innerHTML.toUpperCase() :output.innerHTML = output.innerHTML + key.innerHTML.toLowerCase() 
            }
        })
    }
)

function toggleKey(key) {
    if (isShiftActive) {
        key.style.backgroundColor = "#000"
        key.style.color = "#fff"
    } else {
        key.style.backgroundColor = "#fff"
        key.style.color = "#000"
    }

}

console.log(isShiftActive)