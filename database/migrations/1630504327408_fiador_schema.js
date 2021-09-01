'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FiadorSchema extends Schema {
  up () {
    this.create('fiadors', (table) => {
      table.increments()
      table.string(cpfFiador, 11).primary().notNullable()
      table.string(nomeFiador, 160).notNullable()
      table.string(telefoneFiador, 11).binary(telefoneFiador).notNullable()
      table.integer(imovel_id).references(imovel).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fiadors')
  }
}

module.exports = FiadorSchema
