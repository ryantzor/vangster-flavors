const loki = require('lokijs');

const db = new loki('loki.json')
const _flavors = db.getCollection('flavors') || db.addCollection('flavors', {
  unique: ['id'],
  indices: ['id'],
  disableMeta: true,
})

let nextId = 0;

const filterbyId = (idToFilter) => ({ id }) => {
  return id === idToFilter
}

const create = ({ name, tags }) => {
  nextId++;
  return _flavors.insert({ id: nextId, name, tags, rating: 0 });
}

const update = (newFlavor) => {
  _flavors.updateWhere(filterbyId(newFlavor.id), (oldFlavor) => ({
    ...oldFlavor,
    ...newFlavor
  }));
  return getById(newFlavor.id);
}

const remove = (id) => {
  return _flavors.removeWhere(filterbyId(id));
}

const getById = (id) => {
  return _flavors.get(id);
}

const getAll = () => {
  return _flavors.find();
}

module.exports = {
  create,
  update,
  remove,
  getById,
  getAll
}