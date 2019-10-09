| command                                | description                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------- |
| mkdir <directory name>                 | create new directory for a new project                                          |
| npm init -y                            | initialize a package.json for new project                                       |
| npm add knex sqlite3                   | install knex and sqlite3 for local project                                      |
| npm install -g knex                    | install knex globally to be able to run knex commands                           |
| npx knex                               | can be run in place of installing globally                                      |
| knex init                              | creates a knexfile, auto configures 3 objects: development, production, staging |
| knex migration:make create-users-table | creates a migration that tracks any changes made to config object               |
| knex migrate:make add-new-column       | adds a new column, then it needs table structure                                |
| knex migrate:latest                    | run all migration files after adding template info to migration file            |
| knex migrate:rollback                  | undo creation of table                                                          |

|knex seed:make 001-tablename |creates a file the beginning structure for the seed data|
|knex seed:run |runs any migrations and creates a seed file to add custom data to|
