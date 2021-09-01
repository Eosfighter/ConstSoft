'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CasaSchema extends Schema {
  up () {
    this.create('casas', (table) => {
      table.increments()
      table.integer(idCasa).primary().notNullable()
      table.integer(cadaApartPossui_id).references(terreno,casaApartamentoPossui).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('casas')
  }
}

module.exports = CasaSchema
