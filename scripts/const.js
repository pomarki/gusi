const letters = { A: "А", B: "Б", C: "В", D: "Г", E: "Д", X: "X", ALL: "Ψ" };
const titleWords = {
  A: "светло-зелёная гусеница А",
  B: "бирюзовая гусеница Б",
  C: "оранжевая гусеница В",
  D: "зелёная гусеница Г",
  E: "синяя гусеница Д",
  X: "неведомая гусеница X",
  ALL: "все гусеницы, жестб Ψ",
};

const letterArr = Object.entries(letters);

const backBtn = document.querySelector(".hearer__back-btn");
const forwardBtn = document.querySelector(".hearer__forward-btn");
const labelContainer = document.querySelector(".header__labels-container");
const labelLatter = document.querySelector(".header__labels-letter");
const cardsContainer = document.querySelector(".cards__cards-container");

const headerTitle = document.querySelector(".header__info-item");

const classesYears = {
  start: "card__date_start",
  finish: "card__date_finish",
  single: "card__date_single",
};

export {
  classesYears,
  letters,
  backBtn,
  forwardBtn,
  labelContainer,
  labelLatter,
  cardsContainer,
  letterArr,
  titleWords,
  headerTitle,
};
