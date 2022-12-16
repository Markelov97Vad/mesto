export default class FormValidator {
  constructor(objectSelectors , formElem) {
    this._objectSelectors = objectSelectors;
    this._formElem = formElem;
    this._inputList = Array.from(this._formElem.querySelectorAll(this._objectSelectors.inputSelector));
    this._formList = Array.from(document.querySelectorAll(this._objectSelectors.formSelector));
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
        this._isValid(inputElem)
        this._toggleButtonState();
    })
   })
  }
// Добавление обработчиков всем формам;
  enableValidation () {
    this._setEventListeners();
  }
}

