var express =  require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());


server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon server</h1>');
});

server.use('/api/', apiRouter);

server.listen(8080, function () {
    console.log('Server en écoute');
});