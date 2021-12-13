const express = require('express');

var app = express();

app.use('/', function(req, res) {
    res.send('Holaaa :v');
});

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000")