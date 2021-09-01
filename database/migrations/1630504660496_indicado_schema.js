'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IndicadoSchema extends Schema {
  up () {
    this.create('indicados', (table) => {
      table.increments()
      table.string(cpfIndicado, 11).primary().notNullable()
      table.string(nomeIndicado, 160).notNullable()
      table.string(telefoneIndicado, 11).notNullable()
      table.integer(imovel_id).references(imovel).unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('indicados')
  }
}

module.exports = IndicadoSchema
