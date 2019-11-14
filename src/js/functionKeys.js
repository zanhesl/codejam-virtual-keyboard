const LANG_CHANGE = 'ShiftLeft';
const LANG_CHANGE_1 = 'AltLeft';
const LANG_CHANGE_2 = 'AltRight';
const LANG_CHANGE_3 = 'ShiftRight';

let keyDownFlag = true;
let keyCapsFlag = true;


function bindFunction(keysList) {
  const input = document.querySelector('.main-input');
  // Backspace
  const backspace = keysList[0].filter((key) => key.code === 'Backspace')[0];

  document.addEventListener('keydown', (evt) => {
    if (evt.code === backspace.code) {
      input.value = input.value.substr(0, input.value.length - 1);
    }
  });

  document.querySelector(`.${backspace.code}`).addEventListener('mousedown', () => {
    input.value = input.value.substr(0, input.value.length - 1);
  });
  // Shift
  document.addEventListener('keydown', (evt) => {
    if ((evt.key === 'Shift')&&(keyDownFlag)) {
      for (const row of keysList) {
        for (const key of row) {
          key.isShift = !key.isShift;
          key.updateValue();
        }
      }
      keyDownFlag = false;
    }
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Shift') {
      for (const row of keysList) {
        for (const key of row) {
          key.isShift = !key.isShift;
          key.updateValue();
        }
      }
      keyDownFlag = true;
    }
  });

  document.querySelectorAll('.Shift').forEach((button) => {
    button.addEventListener('mousedown', () => {
      for (const row of keysList) {
        for (const key of row) {
          key.isShift = !key.isShift;
          key.updateValue();
        }
      }
    });

    button.addEventListener('mouseup', () => {
      for (const row of keysList) {
        for (const key of row) {
          key.isShift = !key.isShift;
          key.updateValue();
        }
      }
    });
  });
  // CAPS
  document.addEventListener('keydown', (evt) => {
    if ((evt.code === 'CapsLock') && (keyCapsFlag)) {
      for (const row of keysList) {
        for (const key of row) {
          if (key.code.indexOf('Key') >= 0) {
            key.isShift = !key.isShift;
            key.updateValue();
          }
        }
        keyCapsFlag = false
      }
    }
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.code === 'CapsLock') {
      for (const row of keysList) {
        for (const key of row) {
          if (key.code.indexOf('Key') >= 0) {
            key.isShift = !key.isShift;
            key.updateValue();
            document.querySelector('.CapsLock').classList.remove('active');
          }
        }
      }
      keyCapsFlag = true;
    }
  });

  let counter = true;
  document.querySelector('.CapsLock').addEventListener('click', () => {
    for (const row of keysList) {
      for (const key of row) {
        key.isShift = !!counter;
        key.updateValue();
        if (counter) {
          document.querySelector('.CapsLock').classList.add('active');
        } else {
          document.querySelector('.CapsLock').classList.remove('active');
        }
      }
    }
    counter = !counter;
  });

  // lang
  const sequence = new Set();
  document.addEventListener('keydown', (evt) => {
    sequence.add(evt.code);
    if ((sequence.has(LANG_CHANGE) && sequence.has(LANG_CHANGE_1))
      || (sequence.has(LANG_CHANGE) && sequence.has(LANG_CHANGE_2))
      || (sequence.has(LANG_CHANGE_1) && sequence.has(LANG_CHANGE_3))
      || (sequence.has(LANG_CHANGE_2) && sequence.has(LANG_CHANGE_3))) {
      for (const row of keysList) {
        for (const key of row) {
          key.changeLanguage();
          key.updateValue();
        }
      }
      sequence.clear();
    }
  });
  document.addEventListener('keyup', (evt) => {
    sequence.delete(evt.code);
  });
  // Space
  document.querySelector('.Space').addEventListener('click', () => {
    input.value += ' ';
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Space') {
      input.value += ' ';
    }
  });
  // Arrows
  document.addEventListener('keydown', (evt) => {
    if (evt.code.indexOf('Arrow') >= 0) {
      input.focus();
    }
  });

  document.querySelector('.Up').addEventListener('click', () => {
    input.focus();
  });
  document.querySelector('.Dw').addEventListener('click', () => {
    input.focus();
  });
  document.querySelector('.Lt').addEventListener('click', () => {
    input.focus();
  });
  document.querySelector('.Rt').addEventListener('click', () => {
    input.focus();
  });
}

export default bindFunction;
