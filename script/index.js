import { initialCards, objectSelectors, popupEditButtonElem, popupEditProfile, nameInput, jobInput, popupNewCard, addCardButtonElem } from "./constants.js"
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

// выражение которое отрисовывает карточку на странице
const cardsList =  new Section({
  item: initialCards,
  //       готовая карточка
  renderer: (elemCard) => {
    //   добавляем готовую карточку
    cardsList.addItem(createCard(elemCard));
  }},
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

  const cardElement = card.generateCard();
  return cardElement;
};

// попап с картинокой
const popupImage = new PopupWithImage('.popup_theme_figure');

// устанавливаем слушатели для попапа с картинкой, которые унаследованы от Popup
popupImage.setEventListeners();

// информация о пользователе
const userData = new UserInfo({
  username: '.profile__title',
  info: '.profile__subtitle'
});

// попап формы Редю профиль

const popupFormCreatePrifile = new PopupWithForm({
  selector: ".popup_theme_edit",
  //               данные инпута
  handleFormSubmit: (formData) => {
    // добавляем данные для обработки их сабмитом
    userData.setUserInfo(formData);

    popupFormCreatePrifile.close()
  }
});

// добавили слушатель сабмита, унаследовали слушатель открыть попап(клик, esc)
popupFormCreatePrifile.setEventListeners();

// функция для добавления информации с профиля в попап (Ред. профиль)
function setDataInputInForm({inputUsername, inputInfo}) {
  nameInput.value = inputUsername;
  jobInput.value = inputInfo;
}

// слушатель кнопки (Ред. профиль)
popupEditButtonElem.addEventListener('click', () => {
  const receivedData = userData.getUserInfo();
  // заносим данные в инпуты из Профиля
  setDataInputInForm({
    inputUsername: receivedData.nameUser,
    inputInfo: receivedData.information
  });
  popupFormCreatePrifile.open();
}
)

// попап Новое место

const popupFormNewCard = new PopupWithForm({
  selector: '.popup_theme_new-card',
  handleFormSubmit: (formData) => {
// добавление элемента на страницу при помощи функции создания карточки с использованием данных с инпутов
    cardsList.addItem(createCard(formData));
    popupFormNewCard.close()
  }
})

popupFormNewCard.setEventListeners();

addCardButtonElem.addEventListener('click', () => {
// добавление функции состояния кнопки в попапе
  formNewCardValidator.toggleButtonState()
  popupFormNewCard.open();
})

// добавление валидации для 'Редактирования профиля'

const formProfileEditValidator = new FormValidator(objectSelectors , popupEditProfile);
formProfileEditValidator.enableValidation();

// добавление валидации для 'Новое место'

const formNewCardValidator = new FormValidator(objectSelectors , popupNewCard);
formNewCardValidator.enableValidation();
