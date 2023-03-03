import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";

const canvas = document.querySelector(".canvas");
const cardsContainer = document.querySelector(".cards");

let arr = gusi.filter((item) => {
  return item.branch === "x";
});

gusi.forEach((item) => {
  const cardElement = new Card(item);
  const cardItem = cardElement.generateCard();
  cardsContainer.append(cardItem);
});
