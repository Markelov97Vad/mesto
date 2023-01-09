import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imagePopup = this._popup.querySelector('.popup__image');
    this._textImgPopup = this._popup.querySelector('.popup__figcap');
  }

  open(link, name) {
    super.open();
    this._imagePopup.src = link;
    this._textImgPopup.textContent = name;
    this._imagePopup.alt = name;
  }
}
