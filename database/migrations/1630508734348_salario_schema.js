'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalarioSchema extends Schema {
  up () {
    this.create('salarios', (table) => {
      table.increments()
      table.integer(idSalario).primary().unsigned().increments(idSalario).notNullable()
      table.date(data).notNullable()
      table.decimal(salario).notNullable()
      table.string(func_cpf, 11).references(funcionario).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salarios')
  }
}

module.exports = SalarioSchema
