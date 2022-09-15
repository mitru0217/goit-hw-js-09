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
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(data => {
      const { position, delay } = data;
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = e.currentTarget.amount.value;
  const delay = e.currentTarget.delay.value;
  const step = e.currentTarget.step.value;

  const firstPromise = createPromise(1, delay);
  let currentPromise = firstPromise;

  for (let i = 1; i < amount; i++) {
    currentPromise = currentPromise.finally(() => createPromise(i + 1, step));
  }
});
