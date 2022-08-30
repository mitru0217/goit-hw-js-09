// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import "notiflix/dist/notiflix-3.2.5.min.css"

const refs = {
    input: document.querySelector("#datetime-picker"),
    button: document.querySelector("button[data-start]"),
    days: document.querySelector("span[data-days]"),
    hours: document.querySelector("span[data-hours]"),
    minutes: document.querySelector("span[data-minutes]"),
    seconds: document.querySelector("span[data-seconds]"),
    timer: document.querySelector(".timer"),
}

const currentTime = Date.now();
console.log(currentTime);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
 
    if(selectedDates[0] <= currentTime) {
      refs.button.setAttribute("disabled", true)
      Notify.failure(`❌ Please choose a date in the future`)
      return
    }
    refs.button.removeAttribute("disabled", true)
  },
};

flatpickr("input[type=text]", options);

// refs.input.addEventListener("click", () => {
//   let deadLine = Date.parse(refs.input.value);
//      console.log(deadLine);
// });


refs.button.addEventListener("click", () => {
  timer.start();
});

class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    if(this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      let deadLine = Date.parse(refs.input.value);
      console.log(deadLine);
      const deltaTime = deadLine -currentTime;
      console.log(deltaTime);
      const ms = this.convertMs(deltaTime);
      if(deltaTime <= 0) {
        clearInterval(this.intervalId);
      }
      this.onTick(ms);
      console.log(ms);
    }, 1000);
  };
  
 convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = this.addLeadingZero(Math.floor(ms / day));
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
 addLeadingZero(value) {
  return String(value).padStart(2, "0");
};
};

const timer = new Timer({
  onTick: updateTimer
}
);
  function updateTimer ({ days, hours, minutes, seconds }) {
refs.days.innerText = `${days}`;
refs.hours.innerText = `${hours}`;
refs.minutes.innerText = `${minutes}`;
refs.seconds.innerText = `${seconds}`;
  };