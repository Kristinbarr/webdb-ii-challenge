
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 11111, make: 'toyota', model: 'camry', mileage: 200000, transmissionType: 'good', titleStatus: 'salvage'},
        {id: 2, VIN: 11112, make: 'ford', model: 'mustang', mileage: 2000}
      ]);
    });
};
