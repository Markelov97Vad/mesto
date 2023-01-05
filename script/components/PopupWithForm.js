class PopupWithForm extends Popup {
  constructor(selector , handleFormSubmit){
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.form__input');

  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach( input => {
      this._formValues[input.name] = input.value;
    })
    return this._formValues;
  }

  setEventListeners() {
    super.this.setEventListeners();
    this._popupForm.addEventListeners('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}