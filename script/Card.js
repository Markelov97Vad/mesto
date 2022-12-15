class Card {
  constructor(data, templateSelector){
    this._name = data.name;
    this._image = data.link;
    //this._alt = data.alt;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElem = document.querySelector(this._templateSelector).content
    .querySelector('.element').cloneNode(true);

    return cardElem;
  }

  _deleteCard (evt) {
    evt.target.closest('.element').remove();
  }

  _setEventListeners(){
    //const openImage = cardElem.querySelector('.element__image');
      this._elem.addEventListener('click',  () => {
        this._handleOpenPopup();
      });
      popupCloseButtonElem.addEventListener('click', () => {
        this._handleClosePopup();
      })
  }

  _handleOpenPopup(){
    imagePopup.src = this._image;
    popupImage.classList.add('popup_opened');
  }

  _handleClosePopup(){
    imagePopup.src = '';
    popupImage.classList.remove('popup_opened');
  }

  generateCard() {
    this._elem = this._getTemplate();
    this._setEventListeners();

    this._elem.querySelector('.element__title').textContent = this._name;
    this._elem.querySelector('.element__image').src = this._image;
    // this._elem.querySelector('.element__delete-button')
    // .addEventListener('click', deleteCard);
    return this._elem;

  }
  // _handleOpenPopup() {
  //   popupImage.src = this._image;
  //   popupElement.classList.add('popup_is-opened');
  // }

  // _handleClosePopup() {
  //   popupImage.src = '';
  //   popupElement.classList.remove('popup_is-opened');
  // }
};

initialCards.forEach(item => {
  const card = new Card (item, "#cardTemplate");
  const cardElem = card.generateCard();

  elementsContainer.prepend(cardElem);
})
