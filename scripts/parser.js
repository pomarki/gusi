const parser = (arr) => {
  let result = arr.map((i) => {
    let newWords = [];
    let newStarterWords = [];
    i.words.length = 1
      ? (newWords = i.words[0].split(", "))
      : (newWords = i.words);

    i.starter.words = 1
      ? (newStarterWords = i.starter.words[0].split(", "))
      : (newStarterWords = i.starter.words);

    i.words = newWords;
    i.starter.words = newStarterWords;
    return i;
  });
  return result;
};
