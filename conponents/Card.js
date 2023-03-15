import { letters } from "../scripts/const.js";

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
    this._letter = letters[options.branch];
    this._yearClass = options.yearClass;
    this._idMethod = options.idMethod;
    this._inClass = options.inClass;
    this._outClass = options.outClass;
    this._acrossClass = options.acrossClass;
  }

  _getTemplate() {
    const cardElement = document.getElementById("card").content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._card = this._getTemplate();

    this._card.querySelector(".card").id = this._id;
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

    this._card.querySelector(".card__label-marker").textContent = this._letter;
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

    //линии
    const inContainer = this._card.querySelector(".card__lines-in");
    const outContainer = this._card.querySelector(".card__lines-out");
    const acrossContainer = this._card.querySelector(".card__lines-line");
    if (this._inClass != null) {
      inContainer
        .querySelector(`.cards__angle-in-${this._inClass}`)
        .classList.add("card_line_visible");
    }

    if (this._outClass != null) {
      outContainer
        .querySelector(`.cards__angle-out-${this._outClass}`)
        .classList.add("card_line_visible");
    }

    this._acrossClass.forEach((item) => {
      if (item === null) {
        return;
      }
      acrossContainer
        .querySelector(`.cards__line-${item}`)
        .classList.add("card_line_visible");

      outContainer
        .querySelector(`.cards__line-${item}`)
        .classList.add("card_line_visible");

      inContainer
        .querySelector(`.cards__line-${item}`)
        .classList.add("card_line_visible");
    });

    //годы
    const cardYearContainer = this._card.querySelector(".card__date-title");
    const cardYear = this._date.getFullYear();
    this._yearClass === null
      ? (cardYearContainer.textContent = "")
      : (cardYearContainer.textContent = cardYear);
    cardYearContainer.classList.add(this._yearClass);

    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    const openBtn = this._card.querySelector(".card__label-button");
    const mainCard = this._card.querySelector(".card__main");
    const pBtn = this._card.querySelector(".card__nav-button_parent");
    const cBtn = this._card.querySelector(".card__nav-button_child");

    openBtn.addEventListener("click", () => {
      openBtn.classList.toggle("card__label-button_close");
      mainCard.classList.toggle("card__main_visible");
    });
    cBtn.addEventListener("click", () => this._idMethod(this._id, true));
    pBtn.addEventListener("click", () => this._idMethod(this._id, false));
  }
}

export { Card };
