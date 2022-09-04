const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((element) => element.name === animal).residents
  .every((all) => all.age >= age);

console.log(getAnimalsOlderThan('lions', 20));

module.exports = getAnimalsOlderThan;
