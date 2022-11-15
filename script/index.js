const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditElem = document.querySelector('.popup_theme_edit');
const popupCloseButtonElem = popupEditElem.querySelector('.popup__close-button');

const nameElem = document.querySelector('.profile__title');
const jobElem = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');

const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const buttonClosePopup = popupNewCard.querySelector('.popup__close-button');
const titleElem = document.querySelector('#title');
const urlElem = document.querySelector('#url');
const addCardButtonElem = document.querySelector('.profile__add-button');
const createButtonElem = popupNewCard.querySelector('#create')

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

const eventHandlerAddCard = (evt) => {
  evt.preventDefault();
  console.log('submit');
  // createCard({name: titleElem.value})
  // titleElem.value = ''

}

popupNewCard.addEventListener('submit', eventHandlerAddCard);

const createCard = (allCard) => {
  elementsContainer.insertAdjacentHTML('afterbegin',
  `<article class="element">
    <button class="element__delete-button" type="button" aria-label="delete card"></button>
    <img src="${allCard.link}" alt="Фото гор Тяньцзы" class="element__image">
    <div class="element__info">
      <h2 class="element__title">${allCard.name}</h2>
      <button type="button" class="element__button" aria-label="mark like"></button>
    </div>
   </article>
  `)
}

initialCards.forEach((allCard) => {
  createCard(allCard);
})

// функция для 'открытия' попапа редактирования профиля
function openEditPopup () {
  popupEditElem.classList.add('popup_opened');
  nameInput.value = nameElem.textContent;
  jobInput.value = jobElem.textContent;
}
// функция для 'закрытия' попапа редактирования профиля
function closeEditPopup () {
  popupEditElem.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
  closeEditPopup ();
}
// функция для добавления и удаления класса попапу Новое место (открыть,зарыть)
function openCloseNewCardPopup () {
  popupNewCard.classList.toggle('popup_opened');
};


popupEditButtonElem.addEventListener('click', openEditPopup); // кнопка "редактировать" открытия попапа Ред. профиль
popupCloseButtonElem.addEventListener('click', closeEditPopup); // кнопка "X" попапа Ред. профиль
formElement.addEventListener('submit', formSubmitHandler); // кнопка "сохранить" попапа Ред. профиль
addCardButtonElem.addEventListener('click', openCloseNewCardPopup); // кнопка "+" открытия попапа Новое место
buttonClosePopup.addEventListener('click', openCloseNewCardPopup); // кнопка "Х" попапа Новое место
popupNewCard.addEventListener('submit', eventHandlerAddCard); // кнопка "создать" карточку


