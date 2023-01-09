import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({selector , handleFormSubmit}){
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');

  }
// хранит объект с данными инпута
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach( input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      //                     formData// данные инпута
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
