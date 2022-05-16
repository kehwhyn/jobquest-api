const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const SkillController = require('../Controllers/SkillController')

const routerSkills = express.Router()

routerSkills.post('/', (req, res) => {
    SkillController.addSkill(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerSkills.patch('/', (req, res) => {
    SkillController.updatePartialSkill(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerSkills.put('/:id', (req, res) => {
    SkillController.updateSkill(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerSkills.get('/', (req, res) => {
    SkillController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerSkills.get('/:id', (req, res) => {
    SkillController.findSkill(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

routerSkills.delete('/:id', (req, res) => {
    SkillController.deleteSkill(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

module.exports = routerSkills