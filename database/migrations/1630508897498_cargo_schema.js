'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CargoSchema extends Schema {
  up () {
    this.create('cargos', (table) => {
      table.increments()
      table.integer(idCargo).primary().unsigned().increments(idCargo).notNullable()
      table.string(nomeCargo, 45).notNullable()
      table.decimal(salarioBase).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cargos')
  }
}

module.exports = CargoSchema
