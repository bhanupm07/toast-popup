const horizontalEl = document.getElementById("horizontal");
const verticalEl = document.querySelector(".vertical");
const typeEl = document.querySelector(".type");
const MessEl = document.querySelector(".Mess");
const timeEl = document.querySelector(".time");
const btnEl = document.querySelector(".btn");
const outputEl = document.querySelector(".output");
const outputparaEl = document.querySelector(".outputpara");
const closeEl = document.querySelector(".close");

btnEl.addEventListener("click", function () {
  setTimeout(showToast, timeEl.value * 1000);
});

function showToast() {
  outputEl.style.display = "initial";
  outputEl.style.top = "initial";
  outputEl.style.left = "initial";
  outputEl.style.right = "initial";
  outputEl.style.bottom = "initial";
  const horizontalPosition = horizontalEl.value;
  if (horizontalPosition === "Left") {
    outputEl.style.left = "10px";
    // outputEl.style.animation = "slideInLeft 1s ease-in 1s 1";
    // console.log("working");
  }
  if (horizontalEl.value === "Right") {
    outputEl.style.right = "10px";
  }
  if (verticalEl.value === "Top") {
    outputEl.style.top = "10px";
  }
  if (verticalEl.value === "Bottom") {
    outputEl.style.bottom = "10px";
  }
  if (typeEl.value === "Success") {
    outputEl.style.backgroundColor = "green";
    outputEl.style.color = "white";
  } else if (typeEl.value === "Error") {
    outputEl.style.backgroundColor = "orange";
    outputEl.style.color = "white";
  } else if (typeEl.value === "Warning") {
    outputEl.style.backgroundColor = "red";
    outputEl.style.color = "white";
  } else if (typeEl.value === "Info") {
    outputEl.style.backgroundColor = "beige";
    outputEl.style.color = "black";
  }
  outputparaEl.textContent = MessEl.value;
  console.log(outputparaEl.textContent);
  setTimeout(closePopup, 5000);
}

function closePopup() {
  outputEl.style.display = "none";
}

closeEl.addEventListener("click", closePopup);

console.log(timeEl.value);
