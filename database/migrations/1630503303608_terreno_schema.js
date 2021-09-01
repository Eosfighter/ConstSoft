'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TerrenoSchema extends Schema {
  up () {
    this.create('terrenos', (table) => {
      table.increments()
      table.integer(idTerreno).primary().increments(idTerreno).notNullable()
      table.decimal(areaTerreno)
      table.decimal(largura)
      table.decimal(comprimento)
      table.integer(possuiAcliveDedive)
      table.timestamps()
    })
  }

  down () {
    this.drop('terrenos')
  }
}

module.exports = TerrenoSchema
