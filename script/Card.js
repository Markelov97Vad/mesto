export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    // this._handleOpenPopup = handleOpenPopup;
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
    this._element = null;
  }

  _likeCard() {
    this._likeButCard.classList.toggle('element__button_active');
  }

  _setEventListeners() {
    // this._image.addEventListener('click', () =>{
    //   this._handleOpenPopup(this._name, this._link);
    // });
    this._likeButCard.addEventListener('click', () => {
      this._likeCard();
    })
    this._deleteButCard.addEventListener('click', () => {
      this._deleteCard();
    })
  }
}

