'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {
  up () {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string(cpfFunc, 11).primary().notNullable()
      table.string(nomeFunc, 150).notNullable()
      table.string(telefFunc, 10)
      table.string(enderecoFunc, 300)
      table.string(telefContatoFunc, 11)
      table.string(celularFunc, 11)
      table.date(dataIngressoFunc).notNullable()
      table.integer(cargo_id).references(cargo).unsigned().notNullable()
      table.string(usuario, 60)
      table.string(senha, 300)
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionarios')
  }
}

module.exports = FuncionarioSchema
