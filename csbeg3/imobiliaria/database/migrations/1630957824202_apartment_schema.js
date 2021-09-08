'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ApartmentSchema extends Schema {
  up () {
    this.create('apartments', (table) => {
      table.increments()
      table.integer('andarApart').notNullable();
      table.decimal('valorCondApart', 5, 2).notNullable();
      table.tinyint('possuiPort24', 1).notNullable();
      table.integer('apartmentHouseHave_id').notNullable().unsigned().references('id').inTable('apartment_house_haves');
      table.timestamps()
    })
  }

  down () {
    this.drop('apartments')
  }
}

module.exports = ApartmentSchema
