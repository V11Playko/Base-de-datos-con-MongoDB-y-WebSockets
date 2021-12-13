const express = require('express');
const router = express.Router();

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(router);

router.get('/message', function (req, res) {
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
    console.log(req.body);
    console.log(req.query);
    res.send('Mensaje añadido');
});

router.put('/message', function (req, res) {
    console.log(req.body);
    res.send('Mensaje editado');
});

router.patch('/message', function (req, res) {
    console.log(req.body);
    res.send('Se edito solo una parte del mensaje');
});

router.delete('/message', function (req, res) {
    console.log(req.body);
    res.send('Mensaje borrado');
});

// app.use('/', function(req, res) {
//     res.send('Holaaa :v');
// });

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000")