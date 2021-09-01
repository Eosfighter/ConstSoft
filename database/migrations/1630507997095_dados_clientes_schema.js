'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DadosClientesSchema extends Schema {
  up () {
    this.create('dados_clientes', (table) => {
      table.increments()
      table.string(cpfCliente, 11).primary().notNullable()
      table.string(nome, 100).notNullable()
      table.string(endereco, 300)
      table.string(email, 60)
      table.string(sexo, 1).notNullable()
      table.string(estadoCivil, 45)
      table.string(profissao, 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('dados_clientes')
  }
}

module.exports = DadosClientesSchema
