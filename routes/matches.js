const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const MatchController = require('../Controllers/MatchController')

const routerMatch = express.Router()

routerMatch.post('/', (req, res) => {
    MatchController.addMatch(req.body, req.User, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerMatch.patch('/', (req, res) => {
    MatchController.updatePartialMatch(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerMatch.put('/:id', (req, res) => {
    MatchController.updateMatch(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerMatch.get('/', (req, res) => {
    MatchController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerMatch.get('/:id', (req, res) => {
    MatchController.findMatch(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerMatch.delete('/:id', (req, res) => {
    MatchController.deleteMatch(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerMatch