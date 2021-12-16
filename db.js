const db = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

db.Promise = global.Promise;

async function connect() {
    const uri =
    process.env.DB_CONNECT;

   await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'telegrom' })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));
}

module.exports = connect;