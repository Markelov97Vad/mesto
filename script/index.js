import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards, objectSelectors } from "./constants.js"

const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_theme_edit');
const popupCloseButtonElem = popupEditProfile.querySelector('.popup__close-button');
const nameElem = document.querySelector('.profile__title');
const jobElem = document.querySelector('.profile__subtitle');
const formProfileElement = popupEditProfile.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('#name-input');
const jobInput = formProfileElement.querySelector('#job-input');
const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const formPopupCard = popupNewCard.querySelector('.popup__form');
const buttonClosePopup = popupNewCard.querySelector('.popup__close-button');
const titleElem = popupNewCard.querySelector('#title-input');
const urlElem = popupNewCard.querySelector('#url-input');
const addCardButtonElem = document.querySelector('.profile__add-button');
const popupsElem = document.querySelectorAll('.popup');
const ESC_CODE = 'Escape';

// рендер карточек

initialCards.forEach( item => {
  const card = new Card (item, "#cardTemplate");
  const cardElem = card.generateCard();

  elementsContainer.prepend(cardElem);
})

// обработчик событий для добавления новой карточки

const submitAddCardForm = evt => {
  evt.preventDefault();
  const elem = {name: titleElem.value, link: urlElem.value}
  const card = new Card(elem, "#cardTemplate");
  const cardElem = card.generateCard();
  elementsContainer.prepend(cardElem);
  formPopupCard.reset();

  closePopup(popupNewCard);
}


// обработчик событий для (Ред. профиль)

function submitEditForm (evt) {
  evt.preventDefault();
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// открыть попап (Ред. профиль)

function openEditProfileForm () {
  openPopup(popupEditProfile);
  nameInput.value = nameElem.textContent;
  jobInput.value = jobElem.textContent;
}

// общая функцию открыть попап

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',  closeByEsc)
}

// общая функия закрыть попап

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  closeByEsc)
}

// функция закрытия попапа кликом по оверлею

function closeOverlay () {
  popupsElem.forEach( popupElem => {
    popupElem.addEventListener('mousedown', (evt) => {
      if(evt.target === evt.currentTarget) {
        closePopup(popupElem);
      }
    })
  })
};
closeOverlay(popupsElem);

// функция закрытия попапа нажатием кнопки Esc

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const formProfileEditValidator = new FormValidator(objectSelectors , popupEditProfile);
formProfileEditValidator.enableValidation();

const formNewCardValidator = new FormValidator(objectSelectors , popupNewCard);
formNewCardValidator.enableValidation();

popupEditButtonElem.addEventListener('click', openEditProfileForm); // кнопка "редактировать" открытия попапа (Ред. профиль)
popupCloseButtonElem.addEventListener('click', () => { closePopup(popupEditProfile) }); // кнопка "X" попапа (Ред. профиль)
formProfileElement.addEventListener('submit', submitEditForm); //  "сохранить" попап (Ред. профиль)
addCardButtonElem.addEventListener('click', () => { openPopup(popupNewCard) }); // кнопка "+" открытия попапа (Добавить карточку)
buttonClosePopup.addEventListener('click', () => { closePopup(popupNewCard) }); // кнопка "Х" попапа (Добавить карточку)
popupNewCard.addEventListener('submit', submitAddCardForm); //  "создать" попапа (Добавить карточку)





