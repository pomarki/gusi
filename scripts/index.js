import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";
import {
  letters,
  backBtn,
  forwardBtn,
  labelContainer,
  labelLatter,
  cardsContainer,
  letterArr,
} from "../scripts/const.js";
import { byField, filterCards, renderCards, renderLabel } from "./utils.js";

let actualLetter = 0;

renderCards(gusi, cardsContainer, Card);
renderLabel(5, letterArr, labelLatter, labelContainer);

//letterArr = ["A, А", "B, Б", "C, В", "D, Г", "E, Д", "X, X"]

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

backBtn.addEventListener("click", () => {
  renderLabel(
    getActualIndex(false, letterArr),
    letterArr,
    labelLatter,
    labelContainer
  );
});

forwardBtn.addEventListener("click", () => {
  renderLabel(
    getActualIndex(true, letterArr),
    letterArr,
    labelLatter,
    labelContainer
  );
});
