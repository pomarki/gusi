import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";
import {
  backBtn,
  forwardBtn,
  labelContainer,
  labelLatter,
  cardsContainer,
  letterArr,
  titleWords,
  headerTitle,
} from "../scripts/const.js";
import { filterCards, renderCards, renderLabel, renderTitle } from "./utils.js";

let actualLetter = 6;

let mainCardsArr = gusi.slice();

renderLabel(6, letterArr, labelLatter, labelContainer);
renderCards(mainCardsArr, cardsContainer, Card);
renderTitle(actualLetter, letterArr, titleWords, headerTitle)

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
  return interimIndex;
};

backBtn.addEventListener("click", () => {
  renderLabel(
    getActualIndex(false, letterArr),
    letterArr,
    labelLatter,
    labelContainer
  );

  renderCards(
    filterCards(letterArr[actualLetter][0], mainCardsArr),
    cardsContainer,
    Card
  );

  renderTitle(actualLetter, letterArr, titleWords, headerTitle)
});

forwardBtn.addEventListener("click", () => {
  renderLabel(
    getActualIndex(true, letterArr),
    letterArr,
    labelLatter,
    labelContainer
  );

  renderCards(
    filterCards(letterArr[actualLetter][0], mainCardsArr),
    cardsContainer,
    Card
  );

  renderTitle(actualLetter, letterArr, titleWords, headerTitle)
});

