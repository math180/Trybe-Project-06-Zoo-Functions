const data = require('../data/zoo_data');

const { employees, species } = data;

const getOldestFromFirstSpecies = (id) => {
  const employeeAnimal = employees.find((person) => person.id === id).responsibleFor[0];
  const animal = species.find((ani) => ani.id === employeeAnimal).residents;
  return Object.values(animal.reduce((acc, cur) => {
    if (acc.age > cur.age) {
      return acc;
    }
    return cur;
  }));
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
