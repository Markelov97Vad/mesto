 class FormValidator {
  constructor(objectSelectors , formElem) {
    this._objSel = objectSelectors;
    this._formElem = formElem;
    this._inputList = Array.from(this._formElem.querySelectorAll(this._objSel.inputSelector));
    this._formList = Array.from(document.querySelectorAll(this._objSel.formSelector));
    this._buttonElement =  this._formElem.querySelector(this._objSel.submitButtonSelector);
  }
//showInputError -  показывает элемент ошибки;
  _showInputError(inputElement, errorMessage) {
    const errorElement =  this._formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._objSel.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._objSel.errorClass);
  }
//hideInputError -  скрывает элемент ошибки;
  _hideInputError(inputElement) {
    const errorElement =  this._formElem.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._objSel.inputErrorClass);
    errorElement.classList.remove(this._objSel.errorClass);
    errorElement.textContent = '';
  }
// isValid - проверяет валидность поля; !!!!!!!!!!!}}}}}}}}}}}
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
// функция проверяет все поля;
  _hasInvalidInput() {
    return this._inputList.some( inputElement => {
      return !inputElement.validity.valid;
    })
  }
  // функция которая меняет состояние кнопки;
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
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElem)
        this._toggleButtonState();
    })
   })
  }

  enableValidation () {
    this._formList.forEach( formElem => {
      this._setEventListeners(formElem);
    })
  }
};

const formProfileEditValidator = new FormValidator(objectSelectors , popupEditProfile);
formProfileEditValidator.enableValidation();
const formNewCardValidator = new FormValidator(objectSelectors , popupNewCard);
formNewCardValidator.enableValidation();
