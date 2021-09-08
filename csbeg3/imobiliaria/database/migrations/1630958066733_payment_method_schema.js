'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentMethodSchema extends Schema {
  up () {
    this.create('payment_methods', (table) => {
      table.increments()
      table.string('descFormPag', 45).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('payment_methods')
  }
}

module.exports = PaymentMethodSchema
