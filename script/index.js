let popupEditButtonElem = document.querySelector('.profile__edit-button')
let popupElem = document.querySelector('.popup');
let popupCloseButtonElem = popupElem.querySelector('.popup__close-button');

function openPopup () {
  popupElem.classList.add('popup_open');
}

function closePopup () {
  popupElem.classList.remove('popup_open');
}
popupEditButtonElem.addEventListener('click', openPopup);
popupCloseButtonElem.addEventListener('click', closePopup);

let nameElem = document.querySelector('.profile__title');
let jobElem = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let submitButtomElem = formElement.querySelector (".popup__submit-button");


function formSubmitHandler (evt) {
  evt.preventDefault(); 
  nameElem.textContent = nameInput.value;
  jobElem.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

submitButtomElem.addEventListener('click', closePopup);

