const Knex = require('knex');
const Bookshelf = require('bookshelf');

const config = require('../config');

const knex = Knex(config.db);
const bookshelf = Bookshelf(knex);

module.exports = bookshelf;