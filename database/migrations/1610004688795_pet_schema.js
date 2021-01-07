'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetSchema extends Schema {
  up () {
    this.create('pets', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('age').notNullable()

      // foreign keys
      table.integer('owner_id').unsigned().notNullable()
      table.foreign('owner_id').references('owners_id')

      table.integer('breed_id').unsigned().notNullable()
      table.foreign('breed_id').references('breeds_id')

      table.timestamps()
    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetSchema
