//showInputError -  показывает элемент ошибки;

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectSelectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectSelectors.errorClass);
};

//hideInputError -  скрывает элемент ошибки;

const hideInputError = (formElement ,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectSelectors.inputErrorClass);
  errorElement.classList.remove(objectSelectors.errorClass);
  errorElement.textContent = '';
};

// isValid - проверяет валидность поля;

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// функция проверяет все поля;

const hasInvalidInput = inputList => {
  return inputList.some( inputElement => {
    return !inputElement.validity.valid;
  })
};

// функция которая меняет состояние кнопки;

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

// Добавление обработчиков всем полям формы;

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(objectSelectors.inputSelector));
  const buttonElement = formElement.querySelector(objectSelectors.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach( inputElem => {
    inputElem.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElem);
      toggleButtonState(inputList, buttonElement);
  })
 })
};

// Добавление обработчиков всем формам;

function enableValidation () {
  const formList = Array.from(document.querySelectorAll(objectSelectors.formSelector));

  formList.forEach( formElem => {
    setEventListeners(formElem);
  })
};

enableValidation( objectSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
})
