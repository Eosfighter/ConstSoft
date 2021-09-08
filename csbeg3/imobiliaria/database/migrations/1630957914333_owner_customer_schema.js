'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerCustomerSchema extends Schema {
  up () {
    this.create('owner_customers', (table) => {
      table.string('cpfCliProp', 11).primary().notNullable().unique();
      table.string('customer_data_cpf', 11).notNullable().references('cpfCliente').inTable('customer_data');
      table.timestamps()
    })
  }

  down () {
    this.drop('owner_customers')
  }
}

module.exports = OwnerCustomerSchema
