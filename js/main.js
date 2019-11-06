(function () {
  'use strict';

  class AbstractButton {
    constructor() {
      if (new.target === AbstractButton) {
        throw new TypeError('Cannot construct Abstract instances directly');
      }
    }

    bind() {}

    createDom() {}

    changeLanguage() {}

    getValue() {}

    updateValue() {}
  }

  const INITIAL_LANGUAGE = 'en';

  class LetterButton extends AbstractButton {
    constructor(code, value, wide) {
      super();
      this.code = code;
      this.value = value;
      this.wide = wide;
      this.lang = INITIAL_LANGUAGE;
      this.isShift = false;
    }

    changeLanguage() {
      this.lang = (this.lang === 'en') ? 'ru' : 'en';
    }

    getValue() {
      return this.value[this.lang][+this.isShift];
    }

    bind(node) {
      document.addEventListener('keydown', (evt) => {
        if (evt.code === this.code) {
          node.classList.add('active');
          document.querySelector('.main-input').value += this.getValue();
        }
      });
      document.addEventListener('keyup', (evt) => {
        if (evt.code === this.code) {
          node.classList.remove('active');
        }
      });

      node.addEventListener('mousedown', () => {
        node.classList.add('active');
        document.querySelector('.main-input').value += this.getValue();
      });
      node.addEventListener('mouseup', () => {
        node.classList.remove('active');
      });
    }

    createDom() {
      const letterNode = document.createElement('div');
      letterNode.classList.add('button', this.wide, this.code);
      letterNode.innerText = this.getValue();
      this.bind(letterNode);
      return letterNode;
    }

    updateValue() {
      document.querySelector(`.${this.code}`).innerText = this.getValue();
    }
  }

  class FunctionButton extends AbstractButton {
    constructor(code, value, wide) {
      super();
      this.code = code;
      this.value = value;
      this.wide = wide;
    }

    getValue() {
      return this.value;
    }

    bind(node) {
      document.addEventListener('keydown', (evt) => {
        if (evt.code === this.code) {
          node.classList.add('active');
        }
      });
      document.addEventListener('keyup', (evt) => {
        if (evt.code === this.code) {
          node.classList.remove('active');
        }
      });

      node.addEventListener('mousedown', () => {
        node.classList.add('active');
      });
      node.addEventListener('mouseup', () => {
        node.classList.remove('active');
      });
    }

    createDom() {
      const letterNode = document.createElement('div');
      letterNode.classList.add('button', this.wide, this.value);
      letterNode.innerText = this.value;
      this.bind(letterNode);
      return letterNode;
    }
  }

  const data = [
    [{
      type: 'letter',
      code: 'Digit1',
      values: {
        en: ['1', '!'],
        ru: ['1', '!'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit2',
      values: {
        en: ['2', '@'],
        ru: ['2', '"'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit3',
      values: {
        en: ['3', '#'],
        ru: ['3', '№'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit4',
      values: {
        en: ['4', '$'],
        ru: ['4', '%'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit5',
      values: {
        en: ['5', '%'],
        ru: ['5', ':'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit6',
      values: {
        en: ['6', '^'],
        ru: ['6', ','],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit7',
      values: {
        en: ['7', '&'],
        ru: ['7', '.'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit8',
      values: {
        en: ['8', '*'],
        ru: ['8', ';'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit9',
      values: {
        en: ['9', '('],
        ru: ['9', '('],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Digit0',
      values: {
        en: ['0', ')'],
        ru: ['0', ')'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Minus',
      values: {
        en: ['-', '-'],
        ru: ['-', '-'],
      },
      wide: 'normal',
    },

    {
      type: 'letter',
      code: 'Equal',
      values: {
        en: ['=', '+'],
        ru: ['=', '+'],
      },
      wide: 'normal',
    },

    {
      type: 'function',
      code: 'Backspace',
      value: 'Backspace',
      wide: 'double',
    },
    ],

    [
      {
        type: 'function',
        code: 'Tab',
        value: 'Tab',
        wide: 'double',
      },

      {
        type: 'letter',
        code: 'KeyQ',
        values: {
          en: ['q', 'Q'],
          ru: ['й', 'Й'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyW',
        values: {
          en: ['w', 'W'],
          ru: ['ц', 'Ц'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyE',
        values: {
          en: ['e', 'E'],
          ru: ['у', 'У'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyR',
        values: {
          en: ['r', 'R'],
          ru: ['к', 'К'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyT',
        values: {
          en: ['t', 'T'],
          ru: ['е', 'Е'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyY',
        values: {
          en: ['y', 'Y'],
          ru: ['н', 'Н'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyU',
        values: {
          en: ['u', 'U'],
          ru: ['г', 'Г'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyI',
        values: {
          en: ['i', 'I'],
          ru: ['ш', 'Ш'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyO',
        values: {
          en: ['o', 'O'],
          ru: ['щ', 'Щ'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyP',
        values: {
          en: ['p', 'P'],
          ru: ['з', 'З'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'BracketLeft',
        values: {
          en: ['[', '{'],
          ru: ['х', 'Х'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'BracketRight',
        values: {
          en: [']', '}'],
          ru: ['Ъ', 'Ъ'],
        },
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'Enter',
        value: 'Enter',
        wide: 'double',
      },
    ],

    [
      {
        type: 'function',
        code: 'CapsLock',
        value: 'CapsLock',
        wide: 'double',
      },

      {
        type: 'letter',
        code: 'KeyA',
        values: {
          en: ['a', 'A'],
          ru: ['ф', 'Ф'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyS',
        values: {
          en: ['s', 'S'],
          ru: ['ы', 'Ы'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyD',
        values: {
          en: ['d', 'D'],
          ru: ['в', 'В'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyF',
        values: {
          en: ['f', 'F'],
          ru: ['а', 'А'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyG',
        values: {
          en: ['g', 'G'],
          ru: ['п', 'П'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyH',
        values: {
          en: ['h', 'H'],
          ru: ['р', 'Р'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyJ',
        values: {
          en: ['j', 'J'],
          ru: ['о', 'О'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyK',
        values: {
          en: ['k', 'K'],
          ru: ['л', 'Л'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyL',
        values: {
          en: ['l', 'L'],
          ru: ['д', 'Д'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Semicolon',
        values: {
          en: [';', ':'],
          ru: ['ж', 'Ж'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Quote',
        values: {
          en: ['\'', '"'],
          ru: ['э', 'Э'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Backslash',
        values: {
          en: ['\\', '|'],
          ru: ['ё', 'Ё'],
        },
        wide: 'triple',
      },
    ],

    [
      {
        type: 'function',
        code: 'ShiftLeft',
        value: 'Shift',
        wide: 'double',
      },

      {
        type: 'letter',
        code: 'IntlBackslash',
        values: {
          en: ['`', '~'],
          ru: [']', '['],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyZ',
        values: {
          en: ['z', 'Z'],
          ru: ['я', 'Я'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyX',
        values: {
          en: ['x', 'X'],
          ru: ['ч', 'Ч'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyC',
        values: {
          en: ['c', 'C'],
          ru: ['с', 'С'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyV',
        values: {
          en: ['v', 'V'],
          ru: ['м', 'М'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyB',
        values: {
          en: ['b', 'B'],
          ru: ['и', 'И'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyN',
        values: {
          en: ['n', 'N'],
          ru: ['т', 'Т'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'KeyM',
        values: {
          en: ['m', 'M'],
          ru: ['ь', 'Ь'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Comma',
        values: {
          en: [',', '<'],
          ru: ['б', 'Б'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Period',
        values: {
          en: ['.', '>'],
          ru: ['ю', 'Ю'],
        },
        wide: 'normal',
      },

      {
        type: 'letter',
        code: 'Slash',
        values: {
          en: ['/', '?'],
          ru: ['/', '?'],
        },
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'ArrowUp',
        value: 'Up',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'ShiftRight',
        value: 'Shift',
        wide: 'double',
      },
    ],

    [
      {
        type: 'function',
        code: 'ControlLeft',
        value: 'Ctrl',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'AltLeft',
        value: 'Alt',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'MetaLeft',
        value: 'Cmd',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'Space',
        value: 'Space',
        wide: 'space',
      },

      {
        type: 'function',
        code: 'MetaRight',
        value: 'Cmd',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'AltRight',
        value: 'Alt',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'ArrowLeft',
        value: 'Lt',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'ArrowDown',
        value: 'Dw',
        wide: 'normal',
      },

      {
        type: 'function',
        code: 'ArrowRight',
        value: 'Rt',
        wide: 'normal',
      },
    ],
  ];

  function initiateButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const input = document.createElement('input');
    input.classList.add('main-input');
    input.type = 'text';
    buttonsContainer.appendChild(input);

    const classContainer = [];

    for (const row of data) {
      const buttonsRow = document.createElement('div');
      buttonsRow.classList.add('row');
      const classRow = [];
      for (const key of row) {
        if (key.type === 'letter') {
          const keyNode = new LetterButton(key.code, key.values, key.wide);
          buttonsRow.appendChild(keyNode.createDom());
          classRow.push(keyNode);
        } else {
          const keyNode = new FunctionButton(key.code, key.value, key.wide);
          buttonsRow.appendChild(keyNode.createDom());
          classRow.push(keyNode);
        }
      }
      buttonsContainer.appendChild(buttonsRow);
      classContainer.push(classRow);
    }

    document.querySelector('body').appendChild(buttonsContainer);

    return classContainer;
  }

  const LANG_CHANGE = 'ShiftLeft';
  const LANG_CHANGE_1 = 'AltLeft';
  const LANG_CHANGE_2 = 'AltRight';
  const LANG_CHANGE_3 = 'ShiftRight';


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
      if (evt.key === 'Shift') {
        for (const row of keysList) {
          for (const key of row) {
            key.isShift = !key.isShift;
            key.updateValue();
          }
        }
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
      if (evt.code === 'CapsLock') {
        for (const row of keysList) {
          for (const key of row) {
            if (key.code.indexOf('Key') >= 0) {
              key.isShift = !key.isShift;
              key.updateValue();
            }
          }
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

  const buttons = initiateButtons();
  bindFunction(buttons);

}());

//# sourceMappingURL=main.js.map
