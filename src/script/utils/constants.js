const muKanImage =  new URL('../../images/image-card-muKan.jpeg', import.meta.url);
const baganaImage = new URL('../../images/image-card-bagana.jpeg', import.meta.url);
const chanieDanImage = new URL('../../images/image-card-chanieDan.jpeg', import.meta.url);
const vaadhuImage = new URL('../../images/image-card-vaadhu.jpeg', import.meta.url);
const tynziImage = new URL('../../images/image-card-tynzi.jpg', import.meta.url);
const machuPichuImage = new URL('../../images/image-card-machuPichu.jpeg', import.meta.url);


const initialCards = [
  {
    name: 'Му Кан Чай',
    link: muKanImage
  },
  {
    name: 'Багана',
    link: baganaImage
  },
  {
    name: 'Чжанъе Данксиа',
    link: chanieDanImage
  },
  {
    name: 'Ваадху',
    link: vaadhuImage
  },
  {
    name: 'Тяньцзы',
    link: tynziImage
  },
  {
    name: 'Мачу-Пикчу',
    link: machuPichuImage
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
