import AbstractButton from './abstractButton';

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

export default FunctionButton;
