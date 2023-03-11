import { classesYears } from "./const.js";

const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
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

const renderCards = (arr, container, cardClass) => {
  container.innerHTML = "";

  const yearsItems = getBoundsYears(
    arr.sort(byField("date")).sort(byField("id"))
  );

  arr
    .sort(byField("date"))
    .sort(byField("id"))
    .forEach((item) => {
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

export {
  byField,
  filterCards,
  renderCards,
  renderLabel,
  renderTitle,
  getBoundsYears,
};
