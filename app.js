var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/hola', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://root:lmery1997@merylema.com:27017/ProjectGyA', function(err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    }
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000 - si funciona la conexion");
    });
});