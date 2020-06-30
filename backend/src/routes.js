const express = require('express');

const UsersController = require('./controllers/UsersController');
//const IncidentController = require('./controllers/IncidentController');
//const ProfileController = require('./controllers/ProfileController');
//const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//routes.post('/sessions', SessionController.create);

routes.get('/cadastro', UsersController.index);
routes.post('/cadastro', UsersController.create);
routes.post('/cadastro/update', UsersController.update);
routes.delete('/cadastro/delete/:id', UsersController.delete);

// routes.get('/profile', ProfileController.index);

// routes.get('/incidents', IncidentController.index);
// routes.get('/incidents/:id', IncidentController.find);
// routes.post('/incidents', IncidentController.create);
// routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;