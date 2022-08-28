const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    button: document.querySelector("button[data-start]"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};;
const startTime = options.defaultDate;

refs.button.addEventListener("click", () => {
  let data = refs.input.value
  console.log(data);
  timer.start();
});

refs.input.addEventListener("click", () => {

})


  flatpickr("input[type=text]", options)
   
const timer = {
intervalId: null,
isActive: false,
start() {
if(this.isActive) {
return;
}

console.log(startTime);
this.isActive = true;
this.intervalId = setInterval(() => {
const currentTime = Date.now();
// console.log(currentTime);
const deltaTime = currentTime - startTime;
// console.log(deltaTime);
const { days, hours, minutes, seconds } = convertMs(deltaTime);
// console.log({ days, hours, minutes, seconds });
updateTimer({ days, hours, minutes, seconds });

// console.log(`${days}:${hours}:${minutes}:${seconds}`);
}, 1000);
},
stop() {
clearInterval(this.intervalId);
this.isActive = false;
}
};
timer.start();

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  function updateTimer ({ days, hours, minutes, seconds }) {
refs.days.innerText = `${days}`;
refs.hours.innerText = `${hours}`;
refs.minutes.innerText = `${minutes}`;
refs.seconds.innerText = `${seconds}`;
  }


