exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status, details) {
    console.error ('[response error] ' + details);

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
// Se termino el servidor HTTP en Javascript, y comenzar a escuchar y responder peticiones desde un cliente. (Esto es para hacer un commit si en algun momento tengo que volver a leer el codigo)