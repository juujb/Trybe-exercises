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

module.exports = {
  getAnimal,
}