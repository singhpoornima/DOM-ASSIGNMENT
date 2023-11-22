
// Catching HTML elements:

const decBtn = document.querySelector("#dec-btn");
const incBtn = document.querySelector("#inc-btn");
const displayValue = document.querySelector("#display-value");
const resetValue = document.querySelector("#reset-value");

// Applying Event:
// Decrement button:

decBtn.addEventListener("click", () => {
   const value = Number(displayValue.innerText);
   if(value > 0) {
      displayValue.innerText = value - 1;
   } else {
    alert("negative value is not allowed.");
   }
})

// Now Increment button:

incBtn.addEventListener("click", () =>{
   const value = Number(displayValue.innerText);
   if(value >= 10) {
    alert("10 + value is not allowed.");
   } else {
    displayValue.innerText = value + 1;
   }
})

// Now, turn to reset value:

const reset = () => {
    const value = Number(displayValue.innerText);
    resetValue.addEventListener("click", () => {
        displayValue.innerText = 0;
    })
}
reset();
