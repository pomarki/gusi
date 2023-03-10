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

const renderCards = (arr, container, cardClass) => {
  container.innerHTML = "";

  arr.sort(byField("date")).sort(byField("id")).forEach((item) => {
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

export { byField, filterCards, renderCards, renderLabel, renderTitle, getBoundsYears };
