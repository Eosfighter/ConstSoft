'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertyHistorySchema extends Schema {
  up () {
    this.create('property_histories', (table) => {
      table.increments()
      table.text('infoAntImovel').notNullable();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.timestamps()
    })
  }

  down () {
    this.drop('property_histories')
  }
}

module.exports = PropertyHistorySchema
