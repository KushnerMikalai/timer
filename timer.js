const soundBeep = document.querySelector('.beep');

const buttonStart = document.querySelector('.js-start');
const buttonStop = document.querySelector('.js-stop');
const buttonReset = document.querySelector('.js-reset');

const inputHours = document.querySelector('.js-select-hours');
const inputMinuts = document.querySelector('.js-select-minuts');
const inputSeconds = document.querySelector('.js-select-seconds');

const timerDisplay = document.querySelector('.js-timer-display');

let h = 0;
let m = 0;
let s = 0;

let pauseString = '🤚&nbsp;pause';
let resumeString = '👉&nbsp;resume';
let emptyString = '&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;';
let titleString = 'TIMER';

let interval = null;
let beepInterval = null;
let pausedInterval = null;

let paused = false;
let started = false;
let time = null;

let distance = null;

const setOptions = (to, select) => {
  for (let i = 0; i < to; i++) {
    const opt = document.createElement('option');
    opt.text = i < 10 ? '0' + i : i;
    if (i === 0) opt.selected = true;
    select.options.add(opt, 0);
  }
};

const init = () => {
  setOptions(24, inputHours);
  setOptions(60, inputMinuts);
  setOptions(60, inputSeconds);

  documentSetHeight();
};

const beep = soundEl => {
  soundEl.play();
};

const timerBeep = (count = 5) => {
  beep(soundBeep);
  beepInterval = setInterval(() => {
    if (count % 2 === 0) {
      document.title = '00:00:00';
    } else {
      document.title = '🎉🎉🎉';
    }

    if (count) {
      count--;
      beep(soundBeep);
    } else {
      clearInterval(beepInterval);
    }
  }, 900);
};

const toDisplay = time => {
  let h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((time % (1000 * 60)) / 1000);

  if (h <= 9) h = `0${h}`;
  if (m <= 9) m = `0${m}`;
  if (s <= 9) s = `0${s}`;

  return `${h}:${m}:${s}`;
};

const toSeconds = (h, m, s) => {
  return h * 60 * 60 + m * 60 + s;
};

const getValues = (...args) => {
  return args.map(el => Math.floor(el.value));
};

const calcTime = time => {
  const now = Math.floor(Date.now() / 1000) * 1000;
  distance = time - now;
  const nowTimer = toDisplay(distance);
  timerDisplay.innerHTML = nowTimer;
  document.title = nowTimer;
};

const startInterval = countDownDate => {
  calcTime(countDownDate);
  interval = setInterval(() => {
    calcTime(countDownDate);
    if (distance < 0) {
      timerDisplay.innerHTML = '00:00:00';
      document.title = '00:00:00';
      reset();
      timerBeep();
    }
  }, 1000);
};

const reset = () => {
  timerDisplay.innerHTML = '00:00:00';
  document.title = titleString;
  buttonStop.classList.add('disabled');
  timerDisplay.classList.remove('opacity');
  clearInterval(beepInterval);
  clearInterval(pausedInterval);
  clearInterval(interval);
  paused = false;
  started = false;
  time = null;
};

const pause = () => {
  paused = true;
  clearInterval(interval);
  timerDisplay.classList.add('opacity');
  const nowTimer = toDisplay(distance);

  pausedInterval = setInterval(() => {
    if (timerDisplay.classList.contains('opacity')) {
      timerDisplay.innerHTML = emptyString;
      document.title = titleString;
    } else {
      timerDisplay.innerHTML = nowTimer;
      document.title = nowTimer;
    }
    timerDisplay.classList.toggle('opacity');
  }, 900);

  buttonStop.innerHTML = resumeString;
};

const resume = () => {
  clearInterval(pausedInterval);
  timerDisplay.classList.remove('opacity');
  paused = false;
  const now = Math.floor(Date.now());
  time = now + (distance - 1000);
  startInterval(time);
  buttonStop.innerHTML = pauseString;
};

const miliseconds = (h, m, s) => {
  return (h * 60 * 60 + m * 60 + s) * 1000;
};

const start = () => {
  clearInterval(interval);
  clearInterval(beepInterval);

  timerDisplay.classList.remove('opacity');

  beepInterval = null;
  interval = null;
  timerDisplay.innerHTML = '00:00:00';

  h = Math.floor(inputHours.value);
  m = Math.floor(inputMinuts.value);
  s = Math.floor(inputSeconds.value);

  if (!h && !m && !s) return;
  buttonStop.classList.remove('disabled');

  const now = Math.floor(Date.now());
  time = now + miliseconds(h, m, s);

  if (paused) {
    resume();
  } else {
    startInterval(time);
  }
};

const documentSetHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

buttonReset.addEventListener('click', () => {
  inputHours.value = '00';
  inputMinuts.value = '00';
  inputSeconds.value = '00';
  reset();
});

buttonStart.addEventListener('click', () => {
  start();
});

buttonStop.addEventListener('click', e => {
  if (e.target.classList.contains('disabled')) return;
  paused ? resume() : pause();
});

window.addEventListener('load', init);

window.addEventListener('resize', documentSetHeight);
