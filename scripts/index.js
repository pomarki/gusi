import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";
import {
  letters,
  backBtn,
  forwardBtn,
  labelContainer,
  labelLatter,
  cardsContainer,
} from "../scripts/const.js";
import { byField, filterCards } from "./utils.js";

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

const getActualIndex = (direction, arr) => {
  let interimIndex = actualLetter;
  direction ? (interimIndex += 1) : (interimIndex -= 1);

  if (interimIndex > arr.length - 1) {
    interimIndex = 0;
  }
  if (interimIndex < 0) {
    interimIndex = arr.length - 1;
  }
  actualLetter = interimIndex;
  return actualLetter;
};

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
