const express = require('express');
const routes = express.Router();
const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create); 

routes.get('/incidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.deletar)

routes.get('/profile', ProfileController.list)

module.exports = routes