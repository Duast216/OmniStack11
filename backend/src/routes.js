const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { join } = require('./database/connection');


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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(9),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}),  ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(), 
        description:  Joi.string().required(),
        value:  Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;