'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TerrainSchema extends Schema {
  up () {
    this.create('terrains', (table) => {
      table.increments()
      table.decimal('areaTerreno', 5, 4).notNullable();
      table.decimal('largura', 5, 4).notNullable();
      table.decimal('comprimento', 5, 4).notNullable();
      table.tinyint('possuiAcliveDeclive', 1).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('terrains')
  }
}

module.exports = TerrainSchema
