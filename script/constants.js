// карточки
const initialCards = [
  {
    name: 'Му Кан Чай',
    link: './images/image-card1.jpeg'
  },
  {
    name: 'Багана',
    link: './images/image-card.jpeg'
  },
  {
    name: 'Чжанъе Данксиа',
    link: './images/image-card3.jpeg'
  },
  {
    name: 'Ваадху',
    link: './images/image-card4.jpeg'
  },
  {
    name: 'Тяньцзы',
    link: './images/image-card5.jpg'
  },
  {
    name: 'Мачу-Пикчу',
    link: './images/image-card6.jpeg'
  }
];

// объект настроек с селекторами и классами формы;

const objectSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_theme_edit');
const formProfileElement = popupEditProfile.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('#name-input');
const jobInput = formProfileElement.querySelector('#job-input');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const addCardButtonElem = document.querySelector('.profile__add-button');

export { initialCards, objectSelectors, popupEditButtonElem, popupEditProfile, nameInput, jobInput, popupNewCard, addCardButtonElem}
