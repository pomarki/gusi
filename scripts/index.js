import { gusi } from "../date/myDate.js";
import { Card } from "../conponents/Card.js";

const canvas = document.querySelector(".canvas");
const cardsContainer = document.querySelector(".cards");

let arr = gusi.filter((item) => {
  return item.branch === "x";
});

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}



gusi.sort(byField("date")).forEach((item) => {
  const cardElement = new Card(item);
  const cardItem = cardElement.generateCard();
  cardsContainer.append(cardItem);
});
