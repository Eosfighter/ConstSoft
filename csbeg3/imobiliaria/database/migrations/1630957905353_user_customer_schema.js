'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCustomerSchema extends Schema {
  up () {
    this.create('user_customers', (table) => {
      table.string('cpfCliUsuario', 11).primary().notNullable().unique();
      table.string('customer_data_cpf', 11).notNullable().references('cpfCliente').inTable('customer_data');     
      table.timestamps()
    })
  }

  down () {
    this.drop('user_customers')
  }
}

module.exports = UserCustomerSchema
