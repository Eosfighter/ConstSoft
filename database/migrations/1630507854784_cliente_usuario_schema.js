'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteUsuarioSchema extends Schema {
  up () {
    this.create('clientes_usuarios', (table) => {
      table.increments()
      table.string(cpfCliUsuario, 11).primary().notNullable()
      table.string(dadosCli_cpfCli, 11).references(dadosClientes).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cliente_usuarios')
  }
}

module.exports = ClienteUsuarioSchema
