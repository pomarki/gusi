class Card {
  constructor(options) {
    this._id = options.id;
    this._branch = options.branch;
    this._parent = options.parent;
    this._child = options.child;
    this._index = options.index;
    this._title = options.title;
    this._music = options.music;
    this._theme = options.theme;
    this._location = options.location;
    this._words = options.words;
    this._author = options.author;
    this._link = options.link;
    this._weight = options.weight;
    this._date = options.date;
    this._starter = options.starter;
  }

  _getTemplate() {
    const cardElement = document.getElementById("card").content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();

    this._card
      .querySelector(".card__label")
      .classList.add(`card__label_${this._branch}`);
    this._card
      .querySelector(".card__title")
      .classList.add(`card__title_${this._branch}`);
    this._card
      .querySelector(".card__numbers")
      .classList.add(`card__numbers_${this._branch}`);

    this._card
      .querySelector(".card__values-words")
      .querySelector(".card__values-value")
      .classList.add(`card__values-value_${this._branch}`);

    this._card.querySelector(".card__label-marker").textContent = this._branch;
    this._card.querySelector(".card__author").textContent = this._author;
    this._card.querySelector(".card__title-link").textContent = this._title;
    this._card.querySelector(".card__title-link").href = this._link;
    this._card.querySelector(".card__numbers-item_actual").textContent =
      this._id;
    this._card.querySelector(".card__number-item_current").textContent =
      this._index;

    this._card
      .querySelector(".card__values-theme")
      .querySelector(".card__values-value").textContent = this._theme;

    this._card
      .querySelector(".card__values-location")
      .querySelector(".card__values-value").textContent = this._location;

    this._card
      .querySelector(".card__values-music")
      .querySelector(".card__values-link").textContent = this._music;

    this._card
      .querySelector(".card__values-music")
      .querySelector(".card__values-link").href = this._music;

    this._card
      .querySelector(".card__values-words")
      .querySelector(".card__values-value").textContent = this._words.join(" ");

    return this._card;
  }
}

export { Card };