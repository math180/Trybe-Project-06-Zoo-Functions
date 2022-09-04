const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const newObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((a) => {
    if (a.age < 18) {
      newObj.child += 1;
    }
    if (a.age >= 18 && a.age < 50) {
      newObj.adult += 1;
    }
    if (a.age >= 50) {
      newObj.senior += 1;
    }
  });
  return newObj;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const array = Object.values(countEntrants(entrants));
  const [child, adult, senior] = array;
  const childPrice = child * 20.99;
  const adultPrice = adult * 49.99;
  const seniorPrice = senior * 24.99;
  return childPrice + adultPrice + seniorPrice;
};

module.exports = { calculateEntry, countEntrants };
