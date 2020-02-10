const snd = new Audio(
  'data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU='
);
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

// const setInputFilter = (textbox, inputFilter) => {
//   [
//     'input',
//     'keydown',
//     'keyup',
//     'mousedown',
//     'mouseup',
//     'select',
//     'contextmenu',
//     'drop'
//   ].forEach(event => {
//     textbox.addEventListener(event, function() {
//       if (inputFilter(this.value)) {
//         this.oldValue = this.value;
//         this.oldSelectionStart = this.selectionStart;
//         this.oldSelectionEnd = this.selectionEnd;
//       } else if (this.hasOwnProperty('oldValue')) {
//         this.value = this.oldValue;
//         this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
//       } else {
//         this.value = '';
//       }
//     });
//   });
// };

const setOptions = (to, select) => {
  for (let i = 0; i < to; i++) {
    const opt = document.createElement('option');
    opt.text = i < 10 ? '0' + i : i;
    select.options.add(opt, 0);
  }
};

const init = () => {
  setOptions(24, inputHours);
  setOptions(60, inputMinuts);
  setOptions(60, inputSeconds);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // setInputFilter(
  //   inputHours,
  //   value => /^\d*$/.test(value) && (value === '' || parseInt(value) <= 98)
  // );
  // setInputFilter(inputMinuts, value => /^\d*$/.test(value));
  // setInputFilter(inputSeconds, value => /^\d*$/.test(value));
};

const beep = sound => {
  sound.play();
};

const timerBeep = (count = 5) => {
  beep();
  beepInterval = setInterval(() => {
    if (count % 2 === 0) {
      document.title = '00:00:00';
    } else {
      document.title = '🎉🎉🎉';
    }

    if (count) {
      count--;
      beep();
    } else {
      clearInterval(beepInterval);
    }
  }, 900);
};

const toDisplay = time => {
  const before = Math.floor(time / 60);
  let s = time % 60;
  let m = before % 60;
  let h = Math.floor(before / 60);

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

const startInterval = () => {
  time--;
  interval = setInterval(() => {
    if (!!time) {
      const nowTimer = toDisplay(time);
      timerDisplay.innerHTML = nowTimer;
      document.title = nowTimer;
      time--;
    } else {
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
  const nowTimer = toDisplay(time);

  pausedInterval = setInterval(() => {
    if (timerDisplay.classList.contains('opacity')) {
      timerDisplay.innerHTML = emptyString;
      document.title = titleString;
    } else {
      timerDisplay.innerHTML = nowTimer;
      document.title = nowTimer;
    }
    timerDisplay.classList.toggle('opacity');
  }, 1000);

  buttonStop.innerHTML = resumeString;
};

const resume = () => {
  clearInterval(pausedInterval);
  timerDisplay.classList.remove('opacity');
  paused = false;
  startInterval();
  buttonStop.innerHTML = pauseString;
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

  time = toSeconds(h, m, s);

  if (!time) {
    return;
  }

  buttonStop.classList.remove('disabled');

  if (paused) {
    resume();
  } else {
    startInterval();
  }
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

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
