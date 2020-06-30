const express = require('express'); //importando a variavel
const cors = require('cors');
const routes = require('./routes');
var bodyParser = require('body-parser');
const app= express ();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);