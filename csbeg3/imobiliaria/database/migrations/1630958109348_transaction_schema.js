'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments();
      table.date('dataTransacao').notNullable();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.string('employee_cpf', 11).notNullable().references('cpfFunc').inTable('employees');
      table.string('user_customer_cpf', 11).notNullable().references('cpfCliUsuario').inTable('user_customers');
      table.integer('numContrato').notNullable();
      table.integer('payment_method_id').notNullable().unsigned().references('id').inTable('payment_methods');
      table.decimal('valorComisFunc', 5, 2).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
