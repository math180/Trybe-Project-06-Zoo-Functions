const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.residents.length }), {});
  }
  if (!animal.sex) {
    return data.species.find((an) => an.name === animal.specie).residents.length;
  }
  return data.species.find((a) => a.name === animal.specie).residents
    .filter((sexo) => sexo.sex === animal.sex).length;
};

console.log(countAnimals({ specie: 'tigers', sex: 'female' }));

module.exports = countAnimals;

/* if (Object.keys(animal).includes('sex')) {
    return data.species.find((anim) => anim.name === animal.specie).residents
      .filter((sexo) => sexo.sex === animal.sex).length;
  }
  if (!animal.sex) {
    return data.species.find((ani) => ani.name === animal.species).residents.length;
  }
*/
