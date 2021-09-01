'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormaPagamentoSchema extends Schema {
  up () {
    this.create('formas_pagamentos', (table) => {
      table.increments()
      table.integer(idFormaPag).primary().unsigned().increments(idFormaPag).notNullable()
      table.string(descFormPag, 45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('forma_pagamentos')
  }
}

module.exports = FormaPagamentoSchema
