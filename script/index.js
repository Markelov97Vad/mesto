const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupElem = document.querySelector('.popup');
const popupCloseButtonElem = popupElem.querySelector('.popup__close-button');

const nameElem = document.querySelector('.profile__title');
const jobElem = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');



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

function openPopup () {
  popupElem.classList.add('popup_opened');
  nameInput.value = nameElem.textContent;
  jobInput.value = jobElem.textContent;
}

function closePopup () {
  popupElem.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
  closePopup ();
}

popupEditButtonElem.addEventListener('click', openPopup);
popupCloseButtonElem.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


