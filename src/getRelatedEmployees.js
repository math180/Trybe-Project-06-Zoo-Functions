const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .find((employee) => employee.id === id).managers.length <= 1;

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === true) {
    return data.employees
      .filter((element) => element.managers
        .includes(managerId))
      .map((other) => `${other.firstName} ${other.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
module.exports = { isManager, getRelatedEmployees };
