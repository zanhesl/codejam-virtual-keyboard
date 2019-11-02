(function () {
  'use strict';

  class AbstractButton {
    constructor() {
      if (new.target === AbstractButton) {
        throw new TypeError("Cannot construct Abstract instances directly");
      }
    }

    bind(){}

    createDom() {}

    changeLanguage() {}

    getValue() {}
  }

  const INITIAL_LANGUAGE = `en`;

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
      this.lang = (this.lang == `en`) ? `ru` : `en`;
    }

    getValue() {
      return this.value[this.lang][+this.isShift];
    }

    createDom() {
      const letterNode = document.createElement(`div`);
      letterNode.classList.add(`button`, this.wide, this.code);
      letterNode.innerText = this.getValue();
      return letterNode;
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

    createDom() {
      const letterNode = document.createElement(`div`);
      letterNode.classList.add(`button`, this.wide, this.code);
      letterNode.innerText = this.value;
      return letterNode;
    }
  }

  const data = [
    [{
        type: `letter`,
        code: `Digit1`,
        values: {
          en: [`1`, `1`],
          ru: [`1`, `1`]
        },
        wide: `normal`,
      },

      {
        type: `letter`,
        code: `Digit2`,
        values: {
          en: [`2`, `2`],
          ru: [`2`, `2`]
        },
        wide: `normal`,
      },

      {
        type: `letter`,
        code: `Digit3`,
        values: {
          en: [`3`, `3`],
          ru: [`3`, `3`]
        },
        wide: `normal`,
      },

      {
        type: `letter`,
        code: `Digit4`,
        values: {
          en: [`4`, `4`],
          ru: [`4`, `4`]
        },
        wide: `normal`,
      },

      {
        type: `letter`,
        code: `Digit5`,
        values: {
          en: [`5`, `5`],
          ru: [`5`, `5`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Digit6`,
        values: {
          en: [`6`, `6`],
          ru: [`6`, `6`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Digit7`,
        values: {
          en: [`7`, `7`],
          ru: [`7`, `7`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Digit8`,
        values: {
          en: [`8`, `8`],
          ru: [`8`, `8`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Digit9`,
        values: {
          en: [`9`, `9`],
          ru: [`9`, `9`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Digit0`,
        values: {
          en: [`0`, `0`],
          ru: [`0`, `0`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Minus`,
        values: {
          en: [`-`, `-`],
          ru: [`-`, `-`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Equal`,
        values: {
          en: [`=`, `+`],
          ru: [`=`, `+`]
        },
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `Backspace`,
        value: `Backspace`,
        wide:  `double`,
      }
    ],

    [
      {
        type: `function`,
        code: `Tab`,
        value: `Tab`,
        wide:  `double`,
      },

      {
        type: `letter`,
        code: `KeyQ`,
        values: {
          en: [`q`, `Q`],
          ru: [`й`, `Й`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyW`,
        values: {
          en: [`w`, `W`],
          ru: [`ц`, `Ц`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyE`,
        values: {
          en: [`e`, `E`],
          ru: [`у`, `У`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyR`,
        values: {
          en: [`r`, `R`],
          ru: [`к`, `К`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyT`,
        values: {
          en: [`t`, `T`],
          ru: [`е`, `Е`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyY`,
        values: {
          en: [`y`, `Y`],
          ru: [`н`, `Н`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyU`,
        values: {
          en: [`u`, `U`],
          ru: [`г`, `Г`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyI`,
        values: {
          en: [`i`, `I`],
          ru: [`ш`, `Ш`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyO`,
        values: {
          en: [`o`, `O`],
          ru: [`щ`, `Щ`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyP`,
        values: {
          en: [`p`, `P`],
          ru: [`з`, `З`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `BracketLeft`,
        values: {
          en: [`[`, `{`],
          ru: [`х`, `Х`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `BracketRight`,
        values: {
          en: [`]`, `}`],
          ru: [`Ъ`, `Ъ`]
        },
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `Enter`,
        value: `Enter`,
        wide:  `double`,
      }
    ],

    [
      {
        type: `function`,
        code: `CapsLock`,
        value: `CapsLock`,
        wide:  `double`,
      },

      {
        type: `letter`,
        code: `KeyA`,
        values: {
          en: [`a`, `A`],
          ru: [`ф`, `Ф`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyS`,
        values: {
          en: [`s`, `S`],
          ru: [`ы`, `Ы`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyD`,
        values: {
          en: [`d`, `D`],
          ru: [`в`, `В`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyF`,
        values: {
          en: [`f`, `F`],
          ru: [`а`, `А`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyG`,
        values: {
          en: [`g`, `G`],
          ru: [`п`, `П`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyH`,
        values: {
          en: [`h`, `H`],
          ru: [`р`, `Р`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyJ`,
        values: {
          en: [`j`, `J`],
          ru: [`о`, `О`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyK`,
        values: {
          en: [`k`, `K`],
          ru: [`л`, `Л`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyL`,
        values: {
          en: [`l`, `L`],
          ru: [`д`, `Д`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Semicolon`,
        values: {
          en: [`;`, `:`],
          ru: [`ж`, `Ж`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Quote`,
        values: {
          en: [`'`, `"`],
          ru: [`э`, `Э`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Backslash`,
        values: {
          en: [`\\`, `|`],
          ru: [`ё`, `Ё`]
        },
        wide:  `normal`,
      },
    ],

    [
      {
        type: `function`,
        code: `ShiftLeft`,
        value: `Shift`,
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `IntlBackslash`,
        values: {
          en: [`\``, `~`],
          ru: [`]`, `[`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyZ`,
        values: {
          en: [`z`, `Z`],
          ru: [`я`, `Я`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyX`,
        values: {
          en: [`x`, `X`],
          ru: [`ч`, `Ч`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyC`,
        values: {
          en: [`c`, `C`],
          ru: [`с`, `С`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyV`,
        values: {
          en: [`v`, `V`],
          ru: [`м`, `М`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyB`,
        values: {
          en: [`b`, `B`],
          ru: [`и`, `И`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyN`,
        values: {
          en: [`n`, `N`],
          ru: [`т`, `Т`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `KeyM`,
        values: {
          en: [`m`, `M`],
          ru: [`ь`, `Ь`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Comma`,
        values: {
          en: [`,`, `<`],
          ru: [`б`, `Б`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Period`,
        values: {
          en: [`.`, `>`],
          ru: [`ю`, `Ю`]
        },
        wide:  `normal`,
      },

      {
        type: `letter`,
        code: `Slash`,
        values: {
          en: [`/`, `?`],
          ru: [`/`, `?`]
        },
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `ArrowUp`,
        value: `Up`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `ShiftRight`,
        value: `Shift`,
        wide:  `normal`,
      }
    ],

    [
      {
        type: `function`,
        code: `ControlLeft`,
        value: `Ctrl`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `AltLeft`,
        value: `Alt`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `MetaLeft`,
        value: `Cmd`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `Space`,
        value: ` `,
        wide:  `space`,
      },

      {
        type: `function`,
        code: `MetaRight`,
        value: `Cmd`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `AltRight`,
        value: `Alt`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `ArrowLeft`,
        value: `Lt`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `ArrowDown`,
        value: `Dw`,
        wide:  `normal`,
      },

      {
        type: `function`,
        code: `ArrowRight`,
        value: `Rt`,
        wide:  `normal`,
      },
    ]
  ];

  function initiateButtons() {
    const buttonsContainer = document.createElement(`div`);
    buttonsContainer.classList.add(`buttons-container`);

    const input = document.createElement(`input`);
    input.classList.add(`main-input`);
    input.type = `text`;
    buttonsContainer.appendChild(input);

    const classContainer = [];

    for (let row of data) {
      const buttonsRow = document.createElement(`div`);
      const classRow = [];
      for (let key of row) {
        if (key.type == `letter`) {
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

    document.querySelector(`body`).appendChild(buttonsContainer);

    return classContainer;
  }

  const buttons  = initiateButtons();

}());

//# sourceMappingURL=main.js.map