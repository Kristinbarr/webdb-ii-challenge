
exports.up = function(knex) {
  return knex.schema.table('cars', function(tbl) {
    tbl.string('transmissionType')
    tbl.string('titleStatus')
  })
}

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumns('transmissionType', 'titleStatus')
  })
};
