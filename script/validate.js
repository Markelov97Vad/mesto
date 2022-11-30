
// новые значения



const popupElem = document.querySelectorAll('.popup');
//////
// function allpopupOverlay () {
//   popupElem.forEach( popupElem => {
//     closeOverlay (popupElem);
//   })
//   popupElem.forEach( popupElem => {
//     cloceEscape(popupElem);
//   })
// };

//allpopupOverlay ();

function closeOverlay () {
  popupElem.forEach( popupElem => {
    popupElem.addEventListener('click', (evt) => {
      if(evt.target === evt.currentTarget) {
        closePopup(popupElem);
      }
    })
  })
};
closeOverlay(popupElem);

function cloceEscape () {
  popupElem.forEach( popupElem => {
    document.addEventListener('keydown', (evt) => {
      if ( evt.key === 'Escape'){
        closePopup(popupElem)
      }
    })
  })
};
cloceEscape(popupElem);

////////


//showInputError

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

//hideInputError

const hideInputError = (formElement ,inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

// isValid

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// функция проверяет все поля
const hasInvalidInput = inputList => {
  return inputList.some( inputElement => {
    return !inputElement.validity.valid;
  })
};

// функция которая меняет состояние кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.removeAttribute('disabled');
  }
};

// Добавление обработчиков всем полям формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit-button');
  toggleButtonState(inputList, buttonElement);
  console.dir(inputList);
  inputList.forEach( inputElem => {
    inputElem.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElem);
      toggleButtonState(inputList, buttonElement);
  })
 })
};

// Добавление обработчиков всем формам

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  console.log(formList);
  formList.forEach( formElem => {
    setEventListeners(formElem);
  })
};

enableValidation();
