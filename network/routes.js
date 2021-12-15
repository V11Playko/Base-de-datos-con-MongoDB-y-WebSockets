const express = require('express');
const message = require('../components/message/network');

const routes = function (server) {
    server.use('/message', message )
};

// Exportando routes
module.exports = routes;