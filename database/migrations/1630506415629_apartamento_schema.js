'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartamentoSchema extends Schema {
  up () {
    this.create('apartamentos', (table) => {
      table.increments()
      table.integer(idApart).primary().unsigned().increments(idApart).notNullable()
      table.integer(andarApart)
      table.decimal(valorCondApart)
      table.integer(possuiPort24)
      table.integer(casaApartPossui_id).references(casaApartamentoPossui).unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('apartamentos')
  }
}

module.exports = ApartamentoSchema
