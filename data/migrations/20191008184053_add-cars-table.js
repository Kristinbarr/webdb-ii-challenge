exports.up = function(knex) {
  return knex.schema.createTable('cars', function(tbl) {
    tbl.increments()
    tbl.integer('VIN').notNullable()
    tbl.string('make').notNullable()
    tbl.string('model').notNullable()
    tbl.integer('mileage').notNullable()
  })
}

// VIN, make, model, and mileage.
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
}
