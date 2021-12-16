const db = require('mongoose');
const Model = require('./model');
const dotenv = require('dotenv');
dotenv.config();

const uri =
process.env.DB_CONNECT;

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'telegrom' })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  // return list;
  const messages = await Model.find();
  return messages; 
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get
  // update
  // delete
};

console.log(process.env.DB_USER) //root