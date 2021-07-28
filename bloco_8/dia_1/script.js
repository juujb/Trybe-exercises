const createEmail = (name) => { 
  const id = { Nome: name, }
  id.Email = `${name.replace(' ','_').toLowerCase()}@trybe.com`;
  return id;
};

console.log(createEmail('Jucelio Brandao'));

const newEmployees = () => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  employees.id1 = createEmail('Pedro Guerra');
  employees.id2 = createEmail('Luiza Drummond');
  employees.id3 = createEmail('Carla Paiva');

  return employees;
};