class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._popupCloseButton = this._popup.querySelector('popup__close-button');
    this._closeByEsc = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  // _handleCloseOverlay() {
  //   this._popup.addEventListener('mousedown', (evt) => {
  //     if(evt.target === evt.currentTarget) {
  //       this.close();
  //     }
  //   })
  // }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEsc);
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', () => {
      this.close();
    })

    this._popup.addEventListener('mousedown', (evt) => {
      if(evt.target === evt.currentTarget) {
        this.close();
      }
    })
  }
}
