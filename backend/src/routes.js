const express = require('express');
const routes = express.Router();
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController');
const profileController = require('./Controllers/profileController');
const SessionController = require('./Controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/', OngController.list);
routes.post('/', OngController.create); 

routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.deletar)

routes.get('/profile', profileController.list)

module.exports = routes