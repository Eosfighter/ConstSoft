'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoSchema extends Schema {
  up () {
    this.create('fotos', (table) => {
      table.increments()
      table.integer(idFoto).primary().unsigned().increments(idFoto).notNullable()
      table.string(nomeArq, 200).notNullable()
      table.integer(imovel_id).unsigned().references(imovel).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fotos')
  }
}

module.exports = FotoSchema
