const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

const filterCards = (el, arr) => {
  let result = arr.filter((item) => {
    item.branch === el;
  });
};

const renderCards = (arr, container, cardClass) => {
  container.innerHTML = "";
  arr.sort(byField("date")).forEach((item) => {
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

export { byField, filterCards, renderCards, renderLabel };
