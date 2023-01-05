export default class Section {
  constructor({item, renderer}, selector){
    this._renderedItems = item;
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._renderedItems.forEach( elemCard => this._renderer(elemCard));
  }

  addItem(elem) {
    this._container.prepend(elem);
  }
}

