import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { initialCards, objectSelectors } from "./constants.js"
import Section from "./components/Section.js";
//import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

const popupEditButtonElem = document.querySelector('.profile__edit-button')
const popupEditProfile = document.querySelector('.popup_theme_edit');
//const nameElem = document.querySelector('.profile__title');
//const jobElem = document.querySelector('.profile__subtitle');
const formProfileElement = popupEditProfile.querySelector('.popup__form');
const nameInput = formProfileElement.querySelector('#name-input');
const jobInput = formProfileElement.querySelector('#job-input');
//const elementsContainer = document.querySelector('.elements');
const popupNewCard = document.querySelector('.popup_theme_new-card');
const formPopupCard = popupNewCard.querySelector('.popup__form');
const titleElem = popupNewCard.querySelector('#title-input');
const urlElem = popupNewCard.querySelector('#url-input');
const addCardButtonElem = document.querySelector('.profile__add-button');
//const popupsElem = document.querySelectorAll('.popup');
//const popupImage = document.querySelector('.popup_theme_figure');
//const imagePopup = popupImage.querySelector('.popup__image');
//const textImgPopup = popupImage.querySelector('.popup__figcap')
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

// выражение которое отрисовывает карточку на странице
const cardsList =  new Section({
  item: initialCards,
  //       готовая карточка
  renderer: (elemCard) => {
    //   добавляем готовую карточку
    cardsList.addItem(createCard(elemCard));
  }
  },
  '.elements'
);

// метод добавление карточки на страницу
cardsList.renderItems();

// функция создания карточкий
function createCard (dataCard) {
  const card = new Card ({
    // link и  name
    dataCard: dataCard,
    // заготовка карточки
    templateSelector: "#cardTemplate",
    // инструкция открытия попапа с картинкой
    handleCardClick : (link, name) => {
      popupImage.open(link, name)
    }
  })
  //              метод генерации карточки
  const cardElement = card.generateCard();
  return cardElement;
};

// попап с картинокой
const popupImage = new PopupWithImage('.popup_theme_figure');
// устанавливаем слушатели для этого попапа, которые унаследованы от Popup
popupImage.setEventListeners();









// ПОЛЬЗОВАТЕЛЬ
// информация о пользователе
const userData = new UserInfo({
  username: '.profile__title',
  info: '.profile__subtitle'
});

// попап формы ред профиль ✅

const popupFormCreatePrifile = new PopupWithForm({
  selector: ".popup_theme_edit",
  //                данные инпута
  handleFormSubmit: (formData) => {
    // допавить данные с инпутов
    userData.setUserInfo(formData);

    popupFormCreatePrifile.close()
  }
});

// добавили слушатель сабмита, унаследовали слушатель открыть попап(клик, esc)
popupFormCreatePrifile.setEventListeners();

// функция для добавления информации с профиля в попап (Ред. профиль)
function dataInputForForm({inputUsername, inputInfo}) {
  nameInput.value = inputUsername;
  jobInput.value = inputInfo;
}

// слушатель кнопки (Ред. профиль)
popupEditButtonElem.addEventListener('click', () => {
  const receivedData = userData.getUserInfo();
  // заносим данные в инпуты
  dataInputForForm({
    inputUsername: receivedData.username,
    inputInfo: receivedData.info
  });
  popupFormCreatePrifile.open();
}
)

// попап Новое место ✅

const popupFormNewCard = new PopupWithForm({
  selector: '.popup_theme_new-card',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    popupFormNewCard.close()
  }
})

popupFormNewCard.setEventListeners();

addCardButtonElem.addEventListener('click', () => {
  formNewCardValidator.toggleButtonState()
  popupFormNewCard.open();
})

// const form = new PopupWithForm({
//   selector: '.popup_theme_new-card',
//   handleFormSubmit: (formData) => {
//     cardsList.addItem(createCard(formData));
//     cardsList.close();
//   }
// })

// form.setEventListeners()
// обработчик событий для добавления новой карточки

// const submitAddCardForm = evt => {
//   evt.preventDefault();
//   addCard({name: titleElem.value, link: urlElem.value});
//   formPopupCard.reset();

//   closePopup(popupNewCard);
// }


// обработчик событий для (Ред. профиль)

// function submitEditForm (evt) {
//   evt.preventDefault();
//   nameElem.textContent = nameInput.value;
//   jobElem.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// }

// открыть попап (Ред. профиль)

// function openEditProfileForm () {
//   openPopup(popupEditProfile);
//   nameInput.value = nameElem.textContent;
//   jobInput.value = jobElem.textContent;
// }

// общая функцию открыть попап

// function openPopup (popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown',  closeByEsc);
// }

// общая функия закрыть попап

// function closePopup (popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown',  closeByEsc)
//   formProfileEditValidator.resetValidation();
//   formNewCardValidator.resetValidation();
// }

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

// buttonCloseList.forEach(butn => {
//   const popup = butn.closest('.popup');
//   butn.addEventListener('click', () => closePopup(popup));
// })

//popupEditButtonElem.addEventListener('click', openEditProfileForm); // кнопка "редактировать" открытия попапа (Ред. профиль)
//formProfileElement.addEventListener('submit', submitEditForm); //  "сохранить" попап (Ред. профиль)
//addCardButtonElem.addEventListener('click', () => { openPopup(popupNewCard) }); // кнопка "+" открытия попапа (Добавить карточку)
//popupNewCard.addEventListener('submit', submitAddCardForm); //  "создать" попапа (Добавить карточку)

