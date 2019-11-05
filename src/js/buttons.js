import {
  AbstractButton
} from './abstractButton.js';

const INITIAL_VALUE = 0;
const INITIAL_LANGUAGE = `en`;

export class LetterButton extends AbstractButton {
  constructor(code, value, wide) {
    super();
    this.code = code;
    this.value = value;
    this.wide = wide;
    this.lang = INITIAL_LANGUAGE;
    this.isShift = false
  }

  changeLanguage() {
    this.lang = (this.lang == `en`) ? `ru` : `en`;
  }

  getValue() {
    return this.value[this.lang][+this.isShift];
  }

  bind(node) {
    document.addEventListener(`keydown`, (evt) => {
      if (evt.code == this.code) {
        node.classList.add(`active`);
        document.querySelector(`.main-input`).value += this.getValue();
      }
    });
    document.addEventListener(`keyup`, (evt) => {
      if (evt.code == this.code) {
        node.classList.remove(`active`);
      }
    });

    node.addEventListener(`mousedown`, (evt) => {
      node.classList.add(`active`);
      document.querySelector(`.main-input`).value += this.getValue();
    });
    node.addEventListener(`mouseup`, (evt) => {
      node.classList.remove(`active`);
    });
  }

  createDom() {
    const letterNode = document.createElement(`div`);
    letterNode.classList.add(`button`, this.wide, this.code);
    letterNode.innerText = this.getValue();
    this.bind(letterNode);
    return letterNode;
  }

  updateValue() {
    document.querySelector(`.${this.code}`).innerText = this.getValue();
  }
}

export class FunctionButton extends AbstractButton {
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
    document.addEventListener(`keydown`, (evt) => {
      if (evt.code == this.code) {
        node.classList.add(`active`);
      }
    });
    document.addEventListener(`keyup`, (evt) => {
      if (evt.code == this.code) {
        node.classList.remove(`active`);
      }
    });

    node.addEventListener(`mousedown`, (evt) => {
      node.classList.add(`active`);
    });
    node.addEventListener(`mouseup`, (evt) => {
      node.classList.remove(`active`);
    })
  }

  createDom() {
    const letterNode = document.createElement(`div`);
    letterNode.classList.add(`button`, this.wide, this.value);
    letterNode.innerText = this.value;
    this.bind(letterNode);
    return letterNode;
  }
}
