const popupImage = document.querySelector('.popup_theme_figure');
const imagePopup = popupImage.querySelector('.popup__image');
const textImgPopup = popupImage.querySelector('.popup__figcap')
const butCloseImgPopup = popupImage.querySelector('.popup__close-button');

export default class Card {
  constructor(data, templateSelector){
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElem = document.querySelector(this._templateSelector).content
    .querySelector('.element').cloneNode(true);

    return cardElem;
  }

  generateCard() {
    this._elem = this._getTemplate();
    this._image = this._elem.querySelector('.element__image');
    this._likeButCard = this._elem.querySelector('.element__button');
    this._deleteButCard = this._elem.querySelector('.element__delete-button');
    this._setEventListeners();

    this._elem.querySelector('.element__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    return this._elem;

  }

  _deleteCard () {
    this._elem.remove();
  }

  _likeCard() {
    this._likeButCard.classList.toggle('element__button_active');
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleOpenPopup()
    });
    butCloseImgPopup.addEventListener('click', () => {
      this._handleClosePopup();
    })
    this._likeButCard.addEventListener('click', () => {
      this._likeCard();
    })
    this._deleteButCard.addEventListener('click', () => {
      this._deleteCard();
    })
  }

  _handleOpenPopup(){
    popupImage.classList.add('popup_opened');
    imagePopup.src = this._link;
    textImgPopup.textContent = this._name
  }

  _handleClosePopup(){
    imagePopup.src = '';
    popupImage.classList.remove('popup_opened');
  }

}

