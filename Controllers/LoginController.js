const constants = require('../config/contants')
const AuthManager = require('../Helpers/AuthManager')
const DAO = require('../DAO/UsersDAO')
const { validSignUp } = require('../Helpers/ValidationHelper')

var jwt = require('jsonwebtoken')

class LoginController {
    static login(email, senha, response) {
        AuthManager.ensureValidUser(email, senha, (error, userData) => {
            if (error != null) {
                return response(error, null)
            }
            //Generate token
            let token = AuthManager.generateToken(userData)
            return response(null, { token: token, userData: userData })
        })
    }

    static validateToken(req, response) {
        AuthManager.containsToken(req)
        jwt.verify(req.token, constants.APISecretKey, (error, data) => {
            if (error) {
                response(constants.invalidSession, false)
            } else {
                response(null, true)
            }
        })
    }

    static async signUp({nome, email, senha, perfil}, response) {
        var newUser = {nome, email, senha, perfil};
        console.log(newUser);
        try {
            const { valid, message } = validSignUp(newUser)
            if (valid) {
                await DAO.save({
                    nome,
                    mail: email,
                    senha,
                    tipo_usuario: perfil
                })
                LoginController.login(newUser.email, newUser.senha, response)
            } else {
                response({ code: constants.invalidFields, desc: message }, null)
            }
        } catch (e) {
            if (e.code === constants.duplicatEntry) {
                response({ code: constants.invalidFields, desc: constants.emailAlreadyRegistered }, null)
            } else {
                response(constants.genericError, e)
                console.log(e);
            }
        }
    }
}

module.exports = LoginController