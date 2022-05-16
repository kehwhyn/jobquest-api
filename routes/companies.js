const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const CompanyController = require('../Controllers/CompanyController')

const routerCompanies = express.Router()

routerCompanies.post('/', (req, res) => {
    CompanyController.addCompany(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerCompanies.patch('/:id', (req, res) => {
    CompanyController.updatePartialCompany(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerCompanies.put('/:id', (req, res) => {
    CompanyController.updateCompany(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerCompanies.get('/', (req, res) => {
    CompanyController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerCompanies.get('/:id', (req, res) => {
    CompanyController.findCompany(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerCompanies.delete('/:id', (req, res) => {
    CompanyController.deleteCompany(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerCompanies