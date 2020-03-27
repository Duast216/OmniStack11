const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/users', (request, response) => {
    // Esta é a forma de ir buscar variáveis enviadas por QUERY PARAMS
    const query = request.query;
    console.log(query)

    // Esta é a forma de ir buscar variáveis enviadas por ROUTE PARAMS
    const params = request.params;
    console.log(params);

    // Esta é a forma de ir buscar variáveis enviadas por REQUEST BODY
    const body = request.body;
    console.log(body);


    return response.json({
        event: 'Semana OmniStack',
        aluno: 'Ricardo Martins'
    });
});


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;