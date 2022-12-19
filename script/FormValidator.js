export default class FormValidator {
  constructor(objectSelectors , formElem) {
    this._objectSelectors = objectSelectors;
    this._formElem = formElem;
    this._inputList = Array.from(this._formElem.querySelectorAll(this._objectSelectors.inputSelector));
    this._buttonElement =  this._formElem.querySelector(this._objectSelectors.submitButtonSelector);
  }
// показывает элемент ошибки;
  _showInputError(inputElement, errorMessage) {
    const errorElement =  this._formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._objectSelectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._objectSelectors.errorClass);
  }
// скрывает элемент ошибки;
  _hideInputError(inputElement) {
    const errorElement =  this._formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._objectSelectors.inputErrorClass);
    errorElement.classList.remove(this._objectSelectors.errorClass);
    errorElement.textContent = '';
  }
// проверяет валидность поля;
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
// проверяет все поля;
  _hasInvalidInput() {
    return this._inputList.some( inputElement => {
      return !inputElement.validity.valid;
    })
  }
// меняет состояние кнопки;
  _toggleButtonState () {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.removeAttribute('disabled');
    }
  }
// Добавление обработчиков всем полям формы;
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach( inputElem => {
      inputElem.addEventListener('input', () => {
        this._isValid(inputElem);
        this._toggleButtonState();
      })
    })
  }
// метод для очистки ошибок и управления кнопкой
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
// Добавление обработчиков всем формам;
  enableValidation () {
    this._setEventListeners();
  }
}

