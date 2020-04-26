const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

routes.post('/sessions', SessionController.create)

/** Route for showing all ongs */
routes.get('/ongs', OngController.index);

/** Route for saving a new ong into the database */
routes.post('/ongs', OngController.create);

/** Route for getting all ong incitents */
routes.get('/profile', ProfileController.index)

/** Route for showing all incidents */
routes.get('/incidents', IncidentController.index);

/** Route for saving a new incident */
routes.post('/incidents', IncidentController.create);

/** Route for deleting a specific incident */
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;