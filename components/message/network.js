const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro header personalizado"
    })
    if (req.query.error == "ok") {
        response.error(req, res, 'error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Lista de mensajes', 201);
    }
});

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
		.then(fullMessage => {
			response.success(req, res, fullMessage, 201, 'Datos recibidos') // -> Response
		})
		.catch(() => {
			response.error(
				// -> Response error
				req,res,'Informacion invalida',403,'Error en el controller',
			)
		})
});

router.put('/', function (req, res) {
    console.log(req.body);
    response.success(req, res, 'Mensaje editado');
});

router.patch('/', function (req, res) {
    console.log(req.body);
    response.success(req, res, 'Se edito solo una parte del mensaje');
});

router.delete('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Eliminado correctamente');
});

// Exportar el router

module.exports = router;