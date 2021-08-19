const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((object) => object.name === name);
      if (animal !== undefined) {
        return resolve(animal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = async (name) => {
  // Adicione o código aqui.
  const animalObject = await findAnimalByName(name);
  return animalObject;
};
// ---------------------

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((object) => object.age === age);
      if (animal !== undefined) {
        return resolve(animal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimalByAge = async (age) => {
  // Adicione o código aqui.
  const animalObject = await findAnimalByAge(age);
  return animalObject;
};

module.exports = {
  getAnimal,
  getAnimal,
  getAnimalByAge,
}