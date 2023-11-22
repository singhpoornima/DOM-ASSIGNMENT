// catching HTML element:

const input = document.querySelector("#input");
const displayMsg = document.querySelector("#display");


// applying event on element:

input.addEventListener("keypress", (e) => (
    displayMsg.innerText = "You have pressed the key :" + " " + e.key
))

