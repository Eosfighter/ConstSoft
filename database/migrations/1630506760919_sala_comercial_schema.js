'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaComercialSchema extends Schema {
  up () {
    this.create('salas_comerciais', (table) => {
      table.increments()
      table.integer(idSalaComercial).primary().unsigned().notNullable()
      table.decimal(areaSalaCom)
      table.integer(qtdBanheiros)
      table.integer(qtdComodos)
      table.timestamps()
    })
  }

  down () {
    this.drop('sala_comercials')
  }
}

module.exports = SalaComercialSchema
