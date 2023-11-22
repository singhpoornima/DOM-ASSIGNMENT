
// Catching the HTML element:

const btn = document.querySelector("button");
const displayMsg = document.querySelector("#display-msg");

// Now, Events on element:

btn.addEventListener("click", () => {
    displayMsg.innerText = "Hey! i am learning DOM :)"
})



