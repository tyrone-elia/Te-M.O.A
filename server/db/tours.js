const connection = require('./connection')

function getTours(db = connection) {
  return db('tours').select()
}

module.exports = {
  getTours,
}
