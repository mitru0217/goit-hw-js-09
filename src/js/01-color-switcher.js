const startBTn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
       const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };