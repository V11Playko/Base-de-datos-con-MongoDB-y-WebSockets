const store = require('./store');

function getUser(filterUser) {
    return new Promise(async (resolve, reject) => {
        return resolve(store.list(filterUser));
    });
}

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };
    return store.add(user);
}

module.exports = {
    addUser,
    getUser,
}