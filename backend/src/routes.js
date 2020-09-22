const express = require("express");
const routes = express.Router();
const OngController = require("./Controllers/OngController");
const IncidentController = require("./Controllers/IncidentController");
const ProfileController = require("./Controllers/ProfileController");
const SessionController = require("./Controllers/SessionController");
const { celebrate, Segments, Joi } = require("celebrate");

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.list);

routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(15), 
        endereco: Joi.string()
    })
}), OngController.create);

routes.get("/profile",celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.list);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.list);

routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}),IncidentController.delete);

module.exports = routes;
