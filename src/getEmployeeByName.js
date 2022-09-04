const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};
module.exports = getEmployeeByName;
