'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteProprietarioSchema extends Schema {
  up () {
    this.create('clientes_proprietarios', (table) => {
      table.increments()
      table.string(cpfCliProp, 11).primary().notNullable()
      table.string(dadosCli_cpfCli, 11).references(dadosClientes).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente_proprietarios')
  }
}

module.exports = ClienteProprietarioSchema
