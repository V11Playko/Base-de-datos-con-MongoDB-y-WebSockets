const express = require('express');
const message = require('../components/message/network');
const user = require('../user/network');

const routes = function (server) {
    server.use('/message', message )
    server.use('/user', user);
};

// Exportando routes
module.exports = routes;