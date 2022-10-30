let popupEditButtonElem = document.querySelector('.profile__edit-button')
let popupElem = document.querySelector('.popup');
let popupCloseButtonElem = popupElem.querySelector('.popup__close-button');

let nameElem = document.querySelector('.profile__title');
let jobElem = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');


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


