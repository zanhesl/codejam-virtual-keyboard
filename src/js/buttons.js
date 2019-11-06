import AbstractButton from './abstractButton';

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

export default LetterButton;
