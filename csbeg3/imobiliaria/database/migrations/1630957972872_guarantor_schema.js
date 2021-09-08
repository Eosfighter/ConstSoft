'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GuarantorSchema extends Schema {
  up () {
    this.create('guarantors', (table) => {
      table.string('cpfFiador', 11).primary().notNullable().unique();
      table.string('nomeFiador', 160).notNullable();
      table.string('telefoneFiador', 11).notNullable();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.timestamps()
    })
  }

  down () {
    this.drop('guarantors')
  }
}

module.exports = GuarantorSchema
