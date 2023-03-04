import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";
import {
  letters,
  backBtn,
  forwardBtn,
  labelContainer,
  labelLatter,
} from "../scripts/const.js";

const canvas = document.querySelector(".canvas");
const cardsContainer = document.querySelector(".cards__cards-container");

let arr = gusi.filter((item) => {
  return item.branch === "x";
});

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

/* gusi.sort(byField("date")).forEach((item) => {
  const cardElement = new Card(item);
  const cardItem = cardElement.generateCard();
  cardsContainer.append(cardItem);
}); */

const filterCards = (el, arr) => {
  let result = arr.filter((item) => {
    item.branch === el;
  });
};

const renderCards = (arr) => {
  cardsContainer.innerHTML = "";
  arr.sort(byField("date")).forEach((item) => {
    const cardElement = new Card(item);
    const cardItem = cardElement.generateCard();
    cardsContainer.append(cardItem);
  });
};

renderCards(gusi);

let actualLetter = 0;
const letterArr = Object.entries(letters);

function sliderLetter(direction, arr) {
  let interimIndex = actualLetter;
  direction ? (interimIndex += 1) : (interimIndex -= 1);

  if (interimIndex > arr.length - 1) {
    interimIndex = 0;
  }
  if (interimIndex < 0) {
    interimIndex = arr.length - 1;
  }

  actualLetter = interimIndex;
  labelLatter.textContent = letters[letterArr[actualLetter][0]];
  labelContainer.classList = `header__labels-container header__labels_${letterArr[actualLetter][0]}`;
}

backBtn.addEventListener("click", () => {
  sliderLetter(false, letterArr);
});

forwardBtn.addEventListener("click", () => {
  sliderLetter(true, letterArr);
});
