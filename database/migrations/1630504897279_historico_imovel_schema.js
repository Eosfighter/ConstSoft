'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistoricoImovelSchema extends Schema {
  up () {
    this.create('historico_imoveis', (table) => {
      table.increments()
      table.integer(idHistImov).primary().unsigned().notNullable()
      table.text(infoAntImovel, 1024).notNullable()
      table.integer(imovel_id).references(imovel).unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('historico_imovels')
  }
}

module.exports = HistoricoImovelSchema
