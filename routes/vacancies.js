const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const VacancyController = require('../Controllers/VacancyController')

const routerVacancies = express.Router()

routerVacancies.post('/', (req, res) => {
    VacancyController.addVacancy(req.body, req.User,  (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.patch('/', (req, res) => {
    VacancyController.updatePartialVacancy(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.put('/:id', (req, res) => {
    VacancyController.updateVacancy(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.get('/', (req, res) => {
    VacancyController.list(req.query.tipo, req.query.area, req.User, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.get('/workPeriod', (req, res) => {
    VacancyController.listWorkPeriod((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})
routerVacancies.get('/:id', (req, res) => {
    VacancyController.findVacancy(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.delete('/:id', (req, res) => {
    VacancyController.deleteVacancy(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerVacancies.get('/company/:id', (req, res) => {
    VacancyController.findVacanciesByCompany(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerVacancies