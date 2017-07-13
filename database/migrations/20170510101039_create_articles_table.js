exports.up = function(knex) {
  return knex.schema.createTable('articles', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('users.id').notNull();
    table.string('title').notNull();
    table.text('content').notNull();
    table.string('image_url');
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('articles');
};
