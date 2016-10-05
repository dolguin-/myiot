exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('eventos', function (table) {
      table.increments('id').primary();
      table.integer('device_id');
      table.timestamp('dateTime');
      table.integer('duracion');
      table.text('message');
      table.timestamps('created_at');
    })
  ]);
};
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('eventos'),
  ]);
};