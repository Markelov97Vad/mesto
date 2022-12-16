class Card {
  constructor(data, templateSelector){
    this._name = data.name;
    this._link = data.link;
    //this._alt = data.alt;
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
    //this._elem.querySelector('.element__image').src = this._image;
    //this._setEventListeners();
    // this._elem.querySelector('.element__delete-button')
    // .addEventListener('click', deleteCard);
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
//    ✅
  _handleOpenPopup(){
    popupImage.classList.add('popup_opened');
    imagePopup.src = this._link;
    textImgPopup.textContent = this._name
    console.log(popupImage)
  }
//    ✅
  _handleClosePopup(){
    imagePopup.src = '';
    popupImage.classList.remove('popup_opened');
  }

};

initialCards.forEach( item => {
  const card = new Card (item, "#cardTemplate");
  const cardElem = card.generateCard();

  elementsContainer.prepend(cardElem);
})
