// imports the knex configuration
// exports the instance of knex with those settings
// exports settings for model to know what client, db, migrations, seeds

const knex = require('knex')

const configOptions = require('../knexfile').development

module.exports = knex(configOptions)
