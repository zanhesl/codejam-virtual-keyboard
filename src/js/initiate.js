import LetterButton from './buttons';
import FunctionButton from './buttonsFunc';
import data from './data';

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

export default initiateButtons;
