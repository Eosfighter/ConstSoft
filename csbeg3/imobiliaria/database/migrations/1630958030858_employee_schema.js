'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.string('cpfFunc', 11).primary().notNullable().unique();
      table.string('nomeFunc', 150).notNullable();
      table.string('telefFunc', 10).nullable();
      table.string('enderecoFunc', 300).notNullable();
      table.string('telefContatoFunc', 11).nullable();
      table.string('celularFunc', 11).nullable();
      table.date('dataIngressoFunc').notNullable();
      table.integer('role_id').unsigned().references('id').inTable('roles');
      table.string('usuario', 60).notNullable();
      table.string('senha', 300).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
