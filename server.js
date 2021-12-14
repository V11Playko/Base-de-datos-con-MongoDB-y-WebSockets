const express = require('express');
const router = express.Router();

const response = require('./network/response');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro header personalizado"
    })
    if (req.query.error == "ok") {
        response.error(req, res, 'error simulado', 400);
    } else {
        response.success(req, res, 'Lista de mensajes', 201);
    }
});

router.post('/message', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    response.success(req, res, 'Mensaje añadido');
});

router.put('/message', function (req, res) {
    console.log(req.body);
    response.success(req, res, 'Mensaje editado');
});

router.patch('/message', function (req, res) {
    console.log(req.body);
    response.success(req, res, 'Se edito solo una parte del mensaje');
});

router.delete('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Eliminado correctamente');
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000")