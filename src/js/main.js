import {LetterButton, FunctionButton} from './buttons.js';
import {initiateButtons} from './initiate.js';
import {bindFunction} from './functionKeys.js';

const buttons  = initiateButtons();
bindFunction(buttons);
