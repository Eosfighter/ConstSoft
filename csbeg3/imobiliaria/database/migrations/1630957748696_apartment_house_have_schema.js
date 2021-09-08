'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartmentHouseHaveSchema extends Schema {
  up () {
    this.create('apartment_house_haves', (table) => {
      table.increments();
      table.integer('qtdQuartos').notNullable();
      table.integer('qtdSuites').notNullable();
      table.integer('qtdSalaEstar').notNullable();
      table.integer('qtdSalaJantar').notNullable();
      table.integer('numVagasGaragem').notNullable();
      table.float('area').notNullable();
      table.tinyint('possuiArmEmb', 1).notNullable();
      table.string('descrição', 300).nullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('apartment_house_haves')
  }
}

module.exports = ApartmentHouseHaveSchema
