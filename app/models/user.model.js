const bookshelf = require('../../bootstrap/database');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

module.exports = bookshelf.model('User', User);