'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactSchema extends Schema {
  up () {
    this.create('contacts', (table) => {
      table.increments();
      table.string('nomeContato', 150).notNullable();
      table.string('telefoneContato', 11).notNullable();
      table.string('customer_data_cpf', 11).notNullable().references('cpfCliente').inTable('customer_data');
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts')
  }
}

module.exports = ContactSchema
