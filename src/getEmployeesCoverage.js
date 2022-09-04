const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (obj) => employees
  .find((e) => e.firstName === obj.name || e.lastName === obj.name || e.id === obj.id);

// console.log(getEmployee({ name: 'Niger', id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

const employeeAnimal = (obj) => {
  const employee = getEmployee(obj);
  const animal = [];
  employee.responsibleFor.forEach((spe) => {
    const sp = species.find((spcie) => spcie.id === spe);
    animal.push(sp.name);
  });
  return animal;
};

// console.log(employeeAnimal({ name: 'Niger', id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

// função para obter a localização dos animais
const getLocation = (obj) => {
  const employee = getEmployee(obj);
  const locations = [];
  employee.responsibleFor.forEach((loc) => {
    const ani = species.find((spe) => spe.id === loc);
    locations.push(ani.location);
  });
  return locations;
};

console.log(employeeAnimal({ name: 'Niger', id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

// função para criar o objeto resultado
const resultado = (obj) => {
  const em = getEmployee(obj);
  const specie = employeeAnimal(obj);
  const location = getLocation(obj);
  const obje = {
    id: em.id, fullName: `${em.firstName} ${em.lastName}`, species: specie, locations: location,
  };
  return obje;
};

// função de lançar o erro
const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return employees.map((employee) => resultado({ name: employee.firstName }));
  }
  if (!getEmployee(obj)) {
    throw new Error('Informações inválidas');
  }
  return resultado(obj);
};

console.log(getEmployeesCoverage({ name: 'Nigel', id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

module.exports = getEmployeesCoverage;
