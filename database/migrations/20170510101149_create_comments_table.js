exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('id').primary();
    table.integer('article_id').unsigned().references('articles.id').notNull();
    table.integer('user_id').unsigned().references('users.id').notNull();
    table.string('content').notNull();
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};