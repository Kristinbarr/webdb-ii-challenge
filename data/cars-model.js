// make the functions to retrieve the data from the database

const db = require('./dbConfig')

module.exports = {
  get,
  insert,
  update,
  remove
}

function get(id) {
  return id ? db('cars').where({ id: Number(id) }).first() : db('cars')
}

function insert(body) {
  return db('cars')
    .insert(body)
    .then(() => body)
  // .then(ids => ({ id: ids[0] })) // this returns { "id": 5 }
}

function update(id, changes) {
  return db('cars')
    .update(changes)
    .where('id', id)
}

function remove(id) {
  return db('cars')
    .where('id', id)
    .delete()
}
