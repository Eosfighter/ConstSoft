'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicatedSchema extends Schema {
  up () {
    this.create('indicateds', (table) => {
      table.string('cpfIndicado', 11).primary().notNullable().unique();
      table.string('nomeIndicado', 160).notNullable();
      table.string('telefoneIndicado', 11).notNullable();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.timestamps()
    })
  }

  down () {
    this.drop('indicateds')
  }
}

module.exports = IndicatedSchema
