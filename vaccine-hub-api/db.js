const { Client } = require('pg');
const { getDatabaseUri } = require('./config');
require('colors');

const db = new Client({ connectionString: getDatabaseUri() });

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:'.red, err.stack);
    return;
  }
  console.log('Connected to database'.blue);
});

module.exports = db;
