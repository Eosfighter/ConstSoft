'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransacaoSchema extends Schema {
  up () {
    this.create('transacoes', (table) => {
      table.increments()
      table.integer(idTransacao).primary().unsigned().increments(idTransacao).notNullable()
      table.date(dataTransacao).notNullable()
      table.integer(imovel_id).references(imovel).unsigned().notNullable()
      table.string(func_cpf, 11).references(funcionario).notNullable()
      table.string(cliUsuario_cpf, 11).references(clienteUsuario).notNullable()
      table.integer(numContato).notNullable()
      table.integer(formPag_id).unsigned().references(formaPagamento).notNullable()
      table.decimal(valorComisFunc)
      table.timestamps()
    })
  }

  down () {
    this.drop('transacaos')
  }
}

module.exports = TransacaoSchema
