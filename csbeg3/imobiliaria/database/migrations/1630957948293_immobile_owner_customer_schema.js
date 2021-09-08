'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileOwnerCustomerSchema extends Schema {
  up () {
    this.create('immobile_owner_customers', (table) => {
      table.increments();
      table.integer('immobile_id').notNullable().unsigned().references('id').inTable('immobiles');
      table.string('cpfClienteProp').notNullable().references('cpfCliProp').inTable('owner_customers');
      table.timestamps();
    })
  }

  down () {
    this.drop('immobile_owner_customers')
  }
}

module.exports = ImmobileOwnerCustomerSchema
