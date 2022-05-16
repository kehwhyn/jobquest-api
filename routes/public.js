const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const VacancyController = require('../Controllers/VacancyController')

const routerPublic = express.Router()

routerPublic.get('/list_vacancies', (req, res) => {
    VacancyController.list(req.query.tipo, req.query.area, req.User, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerPublic