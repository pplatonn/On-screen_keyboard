"use strict"

// at first let's take field where text will be written in,
// next step is to get all keys into an array
let output = document.getElementById("outputText");
const keys = document.querySelectorAll(".key");

// this variable will help us to change the letter case
// in the beginning it's obviously false
let isShiftActive = false;

// let's iterate every key in keys array and find out
// 1. if it's shift or backspace
// 2. if shift was tapped
keys.forEach(
    key => {
        key.addEventListener("click", () => {
            if (key.textContent === "Shift") {
                isShiftActive = !isShiftActive;
                toggleKey(key)
            } else if (key.textContent === "Backspace") {
                output.innerHTML = output.innerHTML.slice(0, -1);
            } else {
                isShiftActive ? output.innerHTML = output.innerHTML + key.innerHTML.toUpperCase() :output.innerHTML = output.innerHTML + key.innerHTML.toLowerCase() 
            }
        })
    }
)

// here is function which styles shift to let us know
// if we touched shift or not
function toggleKey(key) {
    if (isShiftActive) {
        key.style.backgroundColor = "#000"
        key.style.color = "#fff"
    } else {
        key.style.backgroundColor = "#fff"
        key.style.color = "#000"
    }
}