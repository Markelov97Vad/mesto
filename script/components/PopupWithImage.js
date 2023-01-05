class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imagePopup = this._popup.querySelector('.popup__image');
    this._textImgPopup = this._popup.querySelector('.popup__figcap');
  }

  open(link, name) {
    super.this.open();
    this._imagePopup.src = link;
    this._imagePopup.alt = name;
    this._textImgPopup.textContent = name;
  }
}
