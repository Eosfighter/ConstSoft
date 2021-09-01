'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImovelClienteProprietarioSchema extends Schema {
  up () {
    this.create('imoveis_clientes_proprietarios', (table) => {
      table.increments()
      table.integer(imovel_id).primary().references(imovel).unsigned().notNullable()
      table.string(cpfClienteProp, 11).primary().references(clienteProprietario).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imovel_cliente_proprietarios')
  }
}

module.exports = ImovelClienteProprietarioSchema
