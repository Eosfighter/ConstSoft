'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImmobileSchema extends Schema {
  up () {
    this.create('immobiles', (table) => {
      table.increments();
      table.integer('terrain_id').unsigned().references('id').inTable('terrains');
      table.integer('commercial_room_id').unsigned().references('id').inTable('commercial_rooms');
      table.integer('house_id').unsigned().references('id').inTable('houses');
      table.integer('apartment_id').unsigned().references('id').inTable('apartments');
      table.string('tipoDisponibilidade', 45).notNullable();
      table.string('sitDispImovel', 45).nullable();
      table.date('dataConst').nullable();
      table.string('enderecoImovel', 160).notNullable();
      table.string('bairroImovel', 160).notNullable();
      table.decimal('valor', 5, 2).notNullable();
      table.decimal('valorReal', 5, 2).nullable();
      table.decimal('valorImobiliaria', 5, 2).nullable();
      table.string('user_customer_cpf', 11).nullable().references('cpfCliUsuario').inTable('user_customers');
      table.date('dataDispVendaLocacao').nullable();
      table.date('dataVendidoAlugado').nullable();
      table.string('dispVendaLocacao', 45).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('immobiles')
  }
}

module.exports = ImmobileSchema
