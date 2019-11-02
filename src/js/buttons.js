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

  createDom() {
    const letterNode = document.createElement(`div`);
    letterNode.classList.add(`button`, this.wide, this.code);
    letterNode.innerText = this.getValue();
    return letterNode;
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

  createDom() {
    const letterNode = document.createElement(`div`);
    letterNode.classList.add(`button`, this.wide, this.code);
    letterNode.innerText = this.value;
    return letterNode;
  }
}
