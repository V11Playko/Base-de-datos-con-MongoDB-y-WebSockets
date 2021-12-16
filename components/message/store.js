const Model = require('./model');

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

function removeMessage(id) {
  return Model.deleteOne ({
    _id:id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
  //get
  // update
  // delete
};
