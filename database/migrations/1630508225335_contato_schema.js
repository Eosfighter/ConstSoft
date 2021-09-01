'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatoSchema extends Schema {
  up () {
    this.create('contatos', (table) => {
      table.increments()
      table.integer(idContato).primary().unsigned().increments(idContato).notNullable()
      table.string(nomeContato, 150).notNullable()
      table.string(telefoneContato, 11).notNullable()
      table.string(dadosCli_cpfCli, 11).references(dadosClientes).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contatoes')
  }
}

module.exports = ContatoSchema
