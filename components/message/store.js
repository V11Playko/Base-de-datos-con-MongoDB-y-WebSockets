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

async function getMessages(filterUser, filterMessage) {
  let filter = {}

    if (filterUser){
        filter = {
            user: filterUser
        }
    }
    
    if (filterMessage){
        filter = {
            ...filter,
            message: filterMessage
        }
    }

    return await Model.find(filter)
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  //get
  // update
  // delete
};
