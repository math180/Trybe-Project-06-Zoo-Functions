const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((ide) => data.species.find((a) => a.id === ide));

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
