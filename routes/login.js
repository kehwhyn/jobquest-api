const express         = require('express')


const ResponseHelper  = require('../Helpers/ResponseHelper')
const LoginController = require('../Controllers/LoginController')
const AuthController = require('../Controllers/AuthController');

const routerLogin = express.Router()

routerLogin.post('/', function (req, res) {
    LoginController.login(req.body.email, req.body.senha, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, false))
    })
})

routerLogin.post('/signup', function (req, res) {
    LoginController.signUp(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, false))
    })
})

routerLogin.get('/token', function (req, res) {
    LoginController.validateToken(req, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data, res, false))
    })
})

routerLogin.post('/users', AuthController.login);

module.exports = routerLogin
