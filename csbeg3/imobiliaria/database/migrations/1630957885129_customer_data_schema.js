'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerDataSchema extends Schema {
  up () {
    this.create('customer_data', (table) => {
      table.string('cpfCliente', 11).primary().notNullable().unique();
      table.string('nome', 100).notNullable();
      table.string('endereco', 300).nullable();
      table.string('email', 60).nullable();
      table.string('sexo', 1).notNullable();
      table.string('estadoCivil', 45).nullable();
      table.string('profissao', 150).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('customer_data')
  }
}

module.exports = CustomerDataSchema
