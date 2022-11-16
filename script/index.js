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


const cardTemplateElem = document.querySelector('#cardTemplate').content;
const cardElem = cardTemplateElem.querySelector('.element');

const popupImage = document.querySelector('.popup_theme_figure');
const imagePopup = popupImage.querySelector('.popup__image');
const textImgPopup = popupImage.querySelector('.popup__figcap')


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


// Рендер карточки

const createCard = elemCard => {
  elementsContainer.append(addNewCard(elemCard));
}

// создание карточки
// события для удаления карточки
const deletHandelCard = evt => {
  evt.target.closest('.element').remove();
};
// события для лайка
const likeHandlCard = evt => {
  evt.target.closest('.element__button').classList.toggle('element__button_active');
};

// const openImgHanCard = evt => {
//   evt.target.popupImage;
//   popupImage.classList.add('popup_opened');

// }

// функция удаления попапа с картинкой
function closeImgPopup() {
  popupImage.classList.toggle('popup_opened');
}


const addNewCard = elemCard => {
  const copyCard = cardElem.cloneNode(true);

  const title = copyCard.querySelector('.element__title');
  const image = copyCard.querySelector('.element__image');
  title.textContent = elemCard.name;
  image.src = elemCard.link;

  // удалить
  const deleteButCard = copyCard.querySelector('.element__delete-button');
  deleteButCard.addEventListener('click', deletHandelCard);

  // лайк
  const likeButCard = copyCard.querySelector('.element__button');
  likeButCard.addEventListener('click', likeHandlCard);

  // события для открытия картинки
  const openImgHanCard = evt => {
    evt.target.popupImage;
    popupImage.classList.add('popup_opened');

    //const imagePopup = popupImage.querySelector('.popup__image');
    imagePopup.src = image.src;
    textImgPopup.textContent = elemCard.name;

    const butCloseImgPopup = popupImage.querySelector('.popup__close-button');
    butCloseImgPopup.addEventListener('click', closeImgPopup);

  }

  // открыть картинку
  const openImage = copyCard.querySelector('.element__image');
  openImage.addEventListener('click', openImgHanCard);

  //const closeImgPopup = popupImage.querySelector('.popup__close-button');


  // const imagePopup = popupImage.querySelector('.popup__image');
  // imagePopup.src = image.src;

  return copyCard;
}

// обработчик событий
const eventHandlerAddCard = (evt) => {
  evt.preventDefault();
  createCard({name: titleElem.value, link: urlElem.value});
  titleElem.value = '';
  urlElem.value = '';
  openCloseNewCardPopup();

}





// const createCard = objactCard => {
//   elementsContainer.insertAdjacentHTML('afterbegin',
//   `<article class="element">
//     <button class="element__delete-button" type="button" aria-label="delete card"></button>
//     <img src="${objactCard.link}" alt="Фото гор Тяньцзы" class="element__image">
//     <div class="element__info">
//       <h2 class="element__title">${objactCard.name}</h2>
//       <button type="button" class="element__button" aria-label="mark like"></button>
//     </div>
//    </article>
//   `)
// }

// методом forEach перебираем каждый элемент массива карточек
initialCards.forEach((elemCard) => {
  createCard(elemCard);
  //console.log(objactCard);
})




// функция для добавления и удаления класса попапу Ред. профиль (открыть,зарыть)
function openCloseEditPopup () {
  popupEditElem.classList.toggle('popup_opened');
  nameInput.value = nameElem.textContent;
  jobInput.value = jobElem.textContent;
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
  openCloseEditPopup();
}
  // функция для добавления и удаления класса попапу Новое место (открыть,зарыть)
  function openCloseNewCardPopup () {
    popupNewCard.classList.toggle('popup_opened');
  };


  popupEditButtonElem.addEventListener('click', openCloseEditPopup); // кнопка "редактировать" открытия попапа Ред. профиль
  popupCloseButtonElem.addEventListener('click', openCloseEditPopup); // кнопка "X" попапа Ред. профиль
  formElement.addEventListener('submit', formSubmitHandler); // кнопка "сохранить" попапа Ред. профиль
  addCardButtonElem.addEventListener('click', openCloseNewCardPopup); // кнопка "+" открытия попапа Новое место
  buttonClosePopup.addEventListener('click', openCloseNewCardPopup); // кнопка "Х" попапа Новое место
  popupNewCard.addEventListener('submit', eventHandlerAddCard); // кнопка "создать" карточку








