import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });

  return promise
    .then(data => {
      const { position, delay } = data;
      Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
      //  Notify.success(delay);
    })
    .catch(data => {
      const { position, delay } = data;
      Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
    });
}

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = parseInt(e.currentTarget.amount.value);
  let delay = parseInt(e.currentTarget.delay.value);
  const step = parseInt(e.currentTarget.step.value);
  // let curDelay = delay;
  var currentPromise = {};
  currentPromise = createPromise(1, delay);

  for (let i = 1; i < amount; i++) {
    delay += step;
    // let tugDelay = String(curDelay);
    // console.log(tugDelay);
    // currentPromise = currentPromise.finally(() => createPromise(i + 1, delay));
    currentPromise = createPromise(i + 1, delay);
    //  console.log(i);
  }
});
