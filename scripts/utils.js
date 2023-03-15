import { classesYears } from "./const.js";
import { cardsContainer, nullCard } from "./const.js";
import { Card } from "../conponents/Card.js";
import { gusi } from "../date/myDate.js";

const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? -1 : 1);
};

const filterCards = (el, arr) => {
  if (el === "ALL") {
    return arr;
  }

  let result = arr.filter((i) => i.branch === el);

  return result;
};

const getYerarsClass = (id, arr, classes) => {
  let currentClass = null;
  if (arr === undefined || arr.length === 0) {
    return currentClass;
  }
  let start = arr[0];
  let finish = arr[1];

  id === start && id === finish
    ? (currentClass = classes.single)
    : id === start
    ? (currentClass = classes.start)
    : id === finish
    ? (currentClass = classes.finish)
    : (currentClass = null);

  return currentClass;
};

const parserWordsArr = (arr) => {
  let result = arr.map((i) => {
    let newWords = [];
    let newStarterWords = [];
    i.words.length === 1
      ? (newWords = i.words[0].split(", "))
      : (newWords = i.words);

    i.starter.words.length === 1
      ? (newStarterWords = i.starter.words[0].split(", "))
      : (newStarterWords = i.starter.words);

    i.words = newWords;
    i.starter.words = newStarterWords;
    return i;
  });
  return result;
};

const foo = (id) => {
  console.log(id);
};

const renderCards = (arr, container, cardClass) => {
  container.innerHTML = "";

  let parsedArr = parserWordsArr(arr);

  const yearsItems = getBoundsYears(
    parsedArr.sort(byField("date")).sort(byField("id"))
  );

  const linkItems = getCardLinks(parsedArr);

  const linkClass = getCardLinkClass(parsedArr, linkItems);

  parsedArr
    .sort(byField("date"))
    .sort(byField("id"))
    .forEach((item, index) => {
      item["inClass"] = linkClass[0][index];
      item["outClass"] = linkClass[1][index];
      item["acrossClass"] = linkClass[2][index];
      item["idMethod"] = renderFamily;
      item["yearClass"] = getYerarsClass(
        item.id,
        yearsItems[item.date.getFullYear()],
        classesYears
      );
      const cardElement = new cardClass(item);
      const cardItem = cardElement.generateCard();
      container.append(cardItem);
    });
};

const renderLabel = (
  letterIndex,
  lettersArr,
  letterContainer,
  labelContainer
) => {
  const letter = lettersArr[letterIndex][1];
  const labelClass = `header__labels-container header__labels_${lettersArr[letterIndex][0]}`;
  letterContainer.textContent = letter;
  labelContainer.classList = labelClass;
};

const renderTitle = (letterIndex, letterArr, titlesObj, titleContainer) => {
  titleContainer.innerHTML = "";
  let titleText = titlesObj[letterArr[letterIndex][0]];
  titleContainer.classList = `header__info-item header__info-item_${letterArr[letterIndex][0]}`;
  titleContainer.textContent = titleText;
};

const getBoundsYears = (arr) => {
  let result = {};

  for (let i = 0; i <= arr.length - 1; i++) {
    let currentYear = arr[i].date.getFullYear();
    currentYear in result
      ? (result[currentYear][1] = arr[i].id)
      : (result[currentYear] = [arr[i].id, arr[i].id]);
  }

  return result;
};

const getCardLinks = (arr) => {
  let result = {};
  arr.forEach((item) => {
    item["branch"] in result
      ? (result[item["branch"]] += 1)
      : (result[item["branch"]] = 1);
  });
  return result;
};

const getCardLinkClass = (mainArr, classObj) => {
  let resultIn = [];
  let resultOut = [];
  let resultAcross = [];
  const referenceObg = Object.assign({}, classObj);
  let min = 1;

  mainArr.forEach((item) => {
    let cardIndex = classObj[item["branch"]];
    let max = referenceObg[item["branch"]];
    let lastAcrossItem = resultAcross[resultAcross.length - 1];
    let lastOut = resultOut[resultOut.length - 1];
    let inItem;
    let outItem;

    let acrossItem = [];

    cardIndex < max ? (inItem = item["branch"]) : (inItem = null);

    cardIndex > min ? (outItem = item["branch"]) : (outItem = null);

    acrossItem = createAcrossItem(inItem, lastOut, lastAcrossItem);

    resultIn.push(inItem);
    resultOut.push(outItem);
    resultAcross.push(acrossItem);

    classObj[item["branch"]] -= 1;
  });

  return [resultIn, resultOut, resultAcross];
};

const createAcrossItem = (inItem, outItem, acrossItem) => {
  let subResult = [null];

  if (outItem != null && outItem != inItem) {
    subResult.push(outItem);
  }

  if (acrossItem === undefined) {
    return subResult;
  }

  let subAcross = acrossItem.filter((item) => item != null && item != inItem);

  subResult.push(subAcross);

  return subResult.flat();
};

const findCard = (cardId, arr) => {
  let result = arr.filter((item) => item.id === cardId);
  return result;
};

const filterChild = (id, arr, findParent) => {
  let family = [];

  let activeCard = findCard(id, arr)[0]; // это карта, чей id упал в запрос

  let receivedDNA =
    activeCard.theme + activeCard.location + activeCard.words.join();

  let donatedDNA =
    activeCard["starter"].theme +
    activeCard["starter"].location +
    activeCard["starter"].words.join();

  if (findParent) {
    family.push(activeCard);
    arr.forEach((item) => {
      let itemDonatedDNA = item.theme + item.location + item.words.join();
      if (donatedDNA === itemDonatedDNA) {
        family.push(item);
        return;
      } else {
        return;
      }
    });
  }

  if (!findParent) {
    //ищем папку
    arr.forEach((item) => {
      let itemReceivedDNA =
        item.starter.theme + item.starter.location + item.starter.words.join();
      if (receivedDNA === itemReceivedDNA) {
        family.push(item);
        return;
      } else {
        return;
      }
    });
    //безотцовщина
    if (family.length === 0) {
      family.push(null);
    }
    //ищем братиков
    arr.forEach((item) => {
      let itemDonatedDNA = item.theme + item.location + item.words.join();
      if (receivedDNA === itemDonatedDNA) {
        family.push(item);
        return;
      } else {
        return;
      }
    });
  }

  return family;
};

const renderFamily = (id, type) => {
  let filteredArr = filterChild(id, gusi, type);

  cardsContainer.innerHTML = "";

  filteredArr.forEach((item) => {
    let currentItem;
    item === null ? currentItem = nullCard : currentItem = item
    const cardElement = new Card(currentItem);
    const cardItem = cardElement.generateCard();
    cardsContainer.append(cardItem);
  });
};

export {
  byField,
  filterCards,
  renderCards,
  renderLabel,
  renderTitle,
  getBoundsYears,
};
