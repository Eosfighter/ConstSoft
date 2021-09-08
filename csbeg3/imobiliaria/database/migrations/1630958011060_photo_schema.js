'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotoSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments();
      table.string('nomeArq', 200).notNullable();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.timestamps()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotoSchema
