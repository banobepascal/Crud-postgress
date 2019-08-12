const pg = require('pg');

module.exports = function() {
    pg.connect('')
  .then(() => winston.info('Connected to MongoDB...'))
}