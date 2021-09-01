'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImovelSchema extends Schema {
  up () {
    this.create('imoveis', (table) => {
      table.increments()
      table.integer(idImovel).primary().unsigned().notNullable()
      table.integer(terreno_id).unsigned()
      table.integer(salaComercial_id).unsigned()
      table.integer(casa_id).unsigned()
      table.integer(apartamento_id).unsigned()
      table.string(tipoDisponibilidade, 45).notNullable()
      table.string(sitDispImovel, 45)
      table.date(dataConst)
      table.string(enderecoImovel, 160)
      table.string(bairroImovel, 160).notNullable()
      table.decimal(valor)
      table.decimal(valorReal)
      table.decimal(valorImobiliaria)
      table.string(clienteUsuario_cpf, 11)
      table.date(dataDispVendaLocacao)
      table.date(dataVendidoAlugado)
      table.string(dispVendaLocacao, 45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('imovels')
  }
}

module.exports = ImovelSchema
