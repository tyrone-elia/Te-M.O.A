exports.up = function (knex) {
  return knex.schema.createTable('tours', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tours')
}
