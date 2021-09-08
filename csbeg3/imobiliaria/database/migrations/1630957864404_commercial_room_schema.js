'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommercialRoomSchema extends Schema {
  up () {
    this.create('commercial_rooms', (table) => {
      table.increments()
      table.decimal('areaSalaCom', 5, 4).notNullable();
      table.integer('qtdBanheiros').notNullable();
      table.integer('qtdComodos').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('commercial_rooms')
  }
}

module.exports = CommercialRoomSchema
