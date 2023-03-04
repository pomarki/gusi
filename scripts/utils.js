const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

const filterCards = (el, arr) => {
  let result = arr.filter((item) => {
    item.branch === el;
  });
};



export { byField, filterCards };
