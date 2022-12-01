//showInputError -  показывает элемент ошибки;

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

//hideInputError -  скрывает элемент ошибки;

const hideInputError = (formElement ,inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

// isValid - проверяет валидность поля;

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
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

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement);
  inputList.forEach( inputElem => {
    inputElem.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElem, inputErrorClass, errorClass)
      toggleButtonState(inputList, buttonElement);
  })
 })
};

// Добавление обработчиков всем формам;

function enableValidation (objectSelectors) {
  const formList = Array.from(document.querySelectorAll(objectSelectors.formSelector));

  formList.forEach( formElem => {
    setEventListeners(formElem, objectSelectors.inputSelector, objectSelectors.submitButtonSelector, objectSelectors.inputErrorClass, objectSelectors.errorClass);
  })
};

enableValidation(objectSelectors);
