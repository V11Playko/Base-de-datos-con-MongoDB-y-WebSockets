const express = require('express');
const path = require('path');

const router = require('./network/routes');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(router);

router(app);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000")
});

// Se termino el servidor HTTP en Javascript, y comenzar a escuchar y responder peticiones desde un cliente. (Esto es para hacer un commit si en algun momento tengo que volver a leer el codigo)