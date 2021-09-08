'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalarySchema extends Schema {
  up () {
    this.create('salaries', (table) => {
      table.increments()
      table.date('data').notNullable();
      table.decimal('salario', 5, 2).notNullable();
      table.string('employee_cpf', 11).notNullable().references('cpfFunc').inTable('employees');
      table.timestamps()
    })
  }

  down () {
    this.drop('salaries')
  }
}

module.exports = SalarySchema
