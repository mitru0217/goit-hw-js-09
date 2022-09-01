
const startBTn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
class colorSwitcher {
  constructor() {
    this.intervalid = null;
   
  };
    start() {
    startBTn.disabled = true;
    stopBtn.disabled = false; 
    this.intervalid = setInterval(() => {
    onChangeBody () 
      }, 1000);
    };
    stop() {
      clearInterval(this.intervalid),
      startBTn.disabled = false;
      stopBtn.disabled = true;
    };
  };

const switcher = new colorSwitcher();

startBTn.addEventListener('click', switcher.start.bind(switcher));
stopBtn.addEventListener('click', switcher.stop.bind(switcher));

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function onChangeBody () {
  body.style.backgroundColor = getRandomHexColor()
}