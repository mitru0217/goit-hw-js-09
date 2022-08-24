const startBTn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
class colorSwitcher {
  constructor() {
    this.intervalid = null;
    this.isActive = false;
  };
    start() {
      if(this.isActive) {
        startBTn.setAttribute("disabled", true)
    return;
      };
        this.isActive = true,
      
    this.intervalid = setInterval(() => {
    onChangeBody () 
      }, 1000);
    };
    stop() {
      clearInterval(this.intervalid),
      this.isActive = false,
      startBTn.removeAttribute("disabled", true)
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