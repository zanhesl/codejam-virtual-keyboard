const LANG_CHANGE = `ControlLeftMetaLeft`;
const LANG_CHANGE_1 = `ControlLeftMetaRight`;

function updateDOM(keys) {
  const container = document.querySelector(`.buttons-container`);
  container.innerHTML = ``;
  for (let row of keys) {
    const buttonsRow = document.createElement(`div`);
    buttonsRow.classList.add(`row`);
    for (let key of row) {
      buttonsRow.appendChild(key.createDom());
    }
    container.appendChild(buttonsRow);
  }
}

export function bindFunction(keysList) {
  const input = document.querySelector(`.main-input`);
  //Backspace
  const backspace = keysList[0].filter((key) => key.code == `Backspace`)[0];

  document.addEventListener(`keydown`, (evt) => {
    if (evt.code == backspace.code) {
      input.value = input.value.substr(0, input.value.length - 1);
    }
  });

  document.querySelector(`.${backspace.code}`).addEventListener(`mousedown`, (evt) => {
    input.value = input.value.substr(0, input.value.length - 1);
  });
  //Shift
  document.addEventListener(`keydown`, (evt) => {
    if (evt.key == `Shift`) {
      for (let row of keysList) {
        for (let key of row) {
          key.isShift = key.isShift ? false : true;
          key.updateValue();
        }
      }
    }
  });

  document.addEventListener(`keyup`, (evt) => {
    if (evt.key == `Shift`) {
      for (let row of keysList) {
        for (let key of row) {
          key.isShift = key.isShift ? false : true;
          key.updateValue();
        }
      }
    }
  });

  document.querySelectorAll(`.Shift`).forEach((button) => {
    button.addEventListener(`mousedown`, (evt) => {
      for (let row of keysList) {
        for (let key of row) {
          key.isShift = key.isShift ? false : true;
          key.updateValue();
        }
      }
    });

    button.addEventListener(`mouseup`, (evt) => {
      for (let row of keysList) {
        for (let key of row) {
          key.isShift = key.isShift ? false : true;
          key.updateValue();
        }
      }
    });
  });
  //CAPS
  document.addEventListener(`keydown`, (evt) => {
    if (evt.code == `CapsLock`) {
      for (let row of keysList) {
        for (let key of row) {
          if (key.code.indexOf(`Key`) >= 0) {
            key.isShift = key.isShift ? false : true;
            key.updateValue();
          }
        }
      }
    }
  });

  document.addEventListener(`keyup`, (evt) => {
    if (evt.code == `CapsLock`) {
      for (let row of keysList) {
        for (let key of row) {
          if (key.code.indexOf(`Key`) >= 0) {
            key.isShift = key.isShift ? false : true;
            key.updateValue();
            document.querySelector(`.CapsLock`).classList.remove(`active`);
          }
        }
      }
    }
  });

  let counter = true;
  document.querySelector(`.CapsLock`).addEventListener(`click`, (evt) => {
    for (let row of keysList) {
      for (let key of row) {
        key.isShift = counter ? true : false;
        key.updateValue();
        if (counter) {
          document.querySelector(`.CapsLock`).classList.add(`active`);
        } else {
          document.querySelector(`.CapsLock`).classList.remove(`active`);
        }
      }
    }
    counter = counter ? false : true;
  });

  //lang
  let sequence = ``;
  document.addEventListener(`keydown`, (evt) => {
    sequence += evt.code;
    if ((sequence.indexOf(LANG_CHANGE) >= 0)||(sequence.indexOf(LANG_CHANGE_1) >= 0)) {
      for (let row of keysList) {
        for (let key of row) {
          key.changeLanguage();
          key.updateValue();
        }
      }
      sequence = "";
    }
  });
  //Space
  document.querySelector(`.Space`).addEventListener(`click`, (evt) => {
    input.value += ` `;
  });
  document.addEventListener(`keydown`, (evt) => {
    if (evt.code == `Space`) {
      input.value += ` `;
    }
  });
  //Arrows
  document.addEventListener(`keydown`, (evt) => {
    if (evt.code.indexOf(`Arrow`)>=0) {
      input.focus();
    }
  });

  document.querySelector(`.Up`).addEventListener(`click`, (evt) => {
    input.focus();
  });
  document.querySelector(`.Dw`).addEventListener(`click`, (evt) => {
    input.focus();
  });
  document.querySelector(`.Lt`).addEventListener(`click`, (evt) => {
    input.focus();
  });
  document.querySelector(`.Rt`).addEventListener(`click`, (evt) => {
    input.focus();
  });
}
