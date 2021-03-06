const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const socket = require('./socket');
const router = require('./network/routes');
const db = require("./db");
require("dotenv").config({ path: ".env" });

// conexion a la base de datos
db(process.env.DB_CONNECT);

db(config.dbUrl);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : false}));

socket.connect(server);

router(app);

/*
const express = require('express');
const path = require('path');
const router = require('./network/routes');
const db = require("./db");
require("dotenv").config({ path: ".env" });

// conexion a la base de datos
db(process.env.DB_CONNECT);

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(router);

router(app);
*/

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Servidor en -> http://localhost:3000")
});

// Se termino el servidor HTTP en Javascript, y comenzar a escuchar y responder peticiones desde un cliente. (Esto es para hacer un commit si en algun momento tengo que volver a leer el codigo)
// Comprender y desarrollar la arquitectura básica de un backend en NodeJS, y comunicarse entre módulos