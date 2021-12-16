const express = require('express');
const router = express.Router();

const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    const filterUser = req.query.user || null
    const filterMessage = req.query.message || null

    console.log(filterUser)
    controller.getMessages(filterUser, filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
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

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res,`Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
});

// Exportar el router

module.exports = router;