
const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_theme_edit');
const popupCloseButtonElem = popupEditProfile.querySelector('.popup__close-button');

const nameElem = document.querySelector('.profile__title');
const jobElem = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name-input');
// новые значения
const formInput = formElement.querySelector('.form__input');
//const formError = formElement.querySelector(`.${formInput.id}-error`);
//console.log(formError);

const jobInput = formElement.querySelector('#job-input');

const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const formPopupCard = popupNewCard.querySelector('.popup__form');
const buttonClosePopup = popupNewCard.querySelector('.popup__close-button');
const titleElem = document.querySelector('#title-input');
const urlElem = document.querySelector('#url-input');
const addCardButtonElem = document.querySelector('.profile__add-button');

const cardTemplateElem = document.querySelector('#cardTemplate').content;
const cardElem = cardTemplateElem.querySelector('.element');

const popupImage = document.querySelector('.popup_theme_figure');
const imagePopup = popupImage.querySelector('.popup__image');
const textImgPopup = popupImage.querySelector('.popup__figcap')
const butCloseImgPopup = popupImage.querySelector('.popup__close-button');

// новые значения

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
  console.log(inputList);
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


//formInput.addEventListener('input', isValid);

// Рендер карточки

const addCard = elemCard => {
  elementsContainer.prepend(createCard(elemCard));
}

// события для удаления карточки

const deleteCard = evt => {
  evt.target.closest('.element').remove();
};

// события для лайка

const likeCard = evt => {
  evt.target.closest('.element__button').classList.toggle('element__button_active');
};

// создание карточки

const createCard = elemCard => {
  const copyCard = cardElem.cloneNode(true);

  const title = copyCard.querySelector('.element__title');
  const image = copyCard.querySelector('.element__image');

  title.textContent = elemCard.name;
  image.src = elemCard.link;
  image.alt = "Изображение " + elemCard.name;

  // удалить
  const deleteButCard = copyCard.querySelector('.element__delete-button');
  deleteButCard.addEventListener('click', deleteCard);

  // лайк
  const likeButCard = copyCard.querySelector('.element__button');
  likeButCard.addEventListener('click', likeCard);

  // события для открытия картинки
  const openImagePopup = () => {
    openPopup(popupImage);

    imagePopup.src = image.src;
    textImgPopup.textContent = elemCard.name;
    imagePopup.alt = 'Изображение ' + elemCard.name;
  }

  // открыть картинку
  const openImage = copyCard.querySelector('.element__image');
  openImage.addEventListener('click', openImagePopup);

  return copyCard;
}

// обработчик событий для добавления карточек

const submitAddCardForm = evt => {
  evt.preventDefault();
  addCard({name: titleElem.value, link: urlElem.value});
  formPopupCard.reset();

  closePopup(popupNewCard);
}

// методом forEach перебираем каждый элемент массива карточек

initialCards.forEach(elemCard => addCard(elemCard));



// обработчик событий для (Ред. профиль)

function submitEditForm (evt) {
  evt.preventDefault();
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// закрыть попап (картинка)

function closeImgPopup() {
  closePopup(popupImage);
}

// открыть попап (Ред. профиль)

function openEditProfileForm () {
  openPopup(popupEditProfile);
  nameInput.value = nameElem.textContent;
  jobInput.value = jobElem.textContent;
}

// закрыть попап (Ред. профиль)

function closeEditProfileForm () {
  closePopup(popupEditProfile);
}

// открыть попап (Добавить карточку)

function openCloseNewCardPopup () {
  openPopup(popupNewCard);
};

// закрыть попап (Добавить карточку)

function closeCloseNewCardPopup () {
  closePopup(popupNewCard);
  console.log();
}

// общая функцию открыть попап

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

// общая функия закрыть попап

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

popupEditButtonElem.addEventListener('click', openEditProfileForm); // кнопка "редактировать" открытия попапа (Ред. профиль)
popupCloseButtonElem.addEventListener('click', closeEditProfileForm); // кнопка "X" попапа (Ред. профиль)
formElement.addEventListener('submit', submitEditForm); //  "сохранить" попап (Ред. профиль)
addCardButtonElem.addEventListener('click', openCloseNewCardPopup); // кнопка "+" открытия попапа (Добавить карточку)
buttonClosePopup.addEventListener('click', closeCloseNewCardPopup); // кнопка "Х" попапа (Добавить карточку)
popupNewCard.addEventListener('submit', submitAddCardForm); //  "создать" попапа (Добавить карточку)
butCloseImgPopup.addEventListener('click', closeImgPopup); // кнопка "Х" попапа (картинка)

// новые значения


// nameInput.addEventListener('input', evt => {
//   console.log(evt.target.validity.valid);
// })


