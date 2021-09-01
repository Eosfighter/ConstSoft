'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CasaApartamentoPossuiSchema extends Schema {
  up () {
    this.create('casa_apartamento_possuem', (table) => {
      table.increments()
      table.integer(idCasaApartPossui).primary().unsigned().increments(idCasaApartPossui).notNullable()
      table.integer(qtdQuartos)
      table.integer(qtdSuites)
      table.integer(qtdSalasEstar)
      table.integer(qtdSalasJantar)
      table.integer(numVagasGaragem)
      table.decimal(area)
      table.integer(possuiArmarioEmb)
      table.string(descricao, 300)
      table.timestamps()
    })
  }

  down () {
    this.drop('casa_apartamento_possuis')
  }
}

module.exports = CasaApartamentoPossuiSchema
