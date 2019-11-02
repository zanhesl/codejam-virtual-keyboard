export class AbstractButton {
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
