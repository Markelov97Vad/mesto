import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards, objectSelectors } from "./constants.js"
import Section from "./components/Section.js";

const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_theme_edit');
const nameElem = document.querySelector('.profile__title');
const jobElem = document.querySelector('.profile__subtitle');
const formProfileElement = popupEditProfile.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('#name-input');
const jobInput = formProfileElement.querySelector('#job-input');
//const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const formPopupCard = popupNewCard.querySelector('.popup__form');
const titleElem = popupNewCard.querySelector('#title-input');
const urlElem = popupNewCard.querySelector('#url-input');
const addCardButtonElem = document.querySelector('.profile__add-button');
const popupsElem = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup_theme_figure');
const imagePopup = popupImage.querySelector('.popup__image');
const textImgPopup = popupImage.querySelector('.popup__figcap')
const buttonCloseList = document.querySelectorAll('.popup__close-button');

// для открытия попапа с изображением

// function handleOpenPopup(name, link) {
//   imagePopup.src = link;
//   imagePopup.alt = name;
//   textImgPopup.textContent = name;
//   openPopup(popupImage);
// }

// генерация карточки

// function createCard(data) {
//   const card = new Card (data, "#cardTemplate", handleOpenPopup);
//   const cardElem = card.generateCard();

//   return cardElem;
// }

// для добавления карточки в DOM

// function addCard(elemCard) {
//   elementsContainer.prepend(createCard(elemCard));
// }

// добавляем карточки в DOM

// initialCards.forEach( elem => { addCard(elem) });

const cardList =  new Section({
  item: initialCards,
  renderer: (elemCard) => {
    const card = new Card (elemCard, "#cardTemplate");
    const cardElem = card.generateCard();

    cardList.addItem(cardElem);
  }
  },
  '.elements'
);

cardList.renderItems();

// обработчик событий для добавления новой карточки

const submitAddCardForm = evt => {
  evt.preventDefault();
  addCard({name: titleElem.value, link: urlElem.value});
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
  document.addEventListener('keydown',  closeByEsc);
}

// общая функия закрыть попап

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  closeByEsc)
  formProfileEditValidator.resetValidation();
  formNewCardValidator.resetValidation();
}

// функция закрытия попапа кликом по оверлею

// function closeOverlay () {
//   popupsElem.forEach( popupElem => {
//     popupElem.addEventListener('mousedown', (evt) => {
//       if(evt.target === evt.currentTarget) {
//         closePopup(popupElem);
//       }
//     })
//   })
// };
// closeOverlay(popupsElem);

// функция закрытия попапа нажатием кнопки Esc

// function closeByEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// }

// добавление валидации для 'Редактирования профиля'

const formProfileEditValidator = new FormValidator(objectSelectors , popupEditProfile);
formProfileEditValidator.enableValidation();

// добавление валидации для 'Новое место'

const formNewCardValidator = new FormValidator(objectSelectors , popupNewCard);
formNewCardValidator.enableValidation();

// добавление слушателя для всех 'X' попапов

buttonCloseList.forEach(butn => {
  const popup = butn.closest('.popup');
  butn.addEventListener('click', () => closePopup(popup));
})

popupEditButtonElem.addEventListener('click', openEditProfileForm); // кнопка "редактировать" открытия попапа (Ред. профиль)
formProfileElement.addEventListener('submit', submitEditForm); //  "сохранить" попап (Ред. профиль)
addCardButtonElem.addEventListener('click', () => { openPopup(popupNewCard) }); // кнопка "+" открытия попапа (Добавить карточку)
popupNewCard.addEventListener('submit', submitAddCardForm); //  "создать" попапа (Добавить карточку)

