'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HouseSchema extends Schema {
  up () {
    this.create('houses', (table) => {
      table.increments()
      table.integer('apartmentHouseHave_id').notNullable().unsigned().references('id').inTable('apartment_house_haves');
      table.timestamps()
    })
  }

  down () {
    this.drop('houses')
  }
}

module.exports = HouseSchema
