const express        = require('express')
const ResponseHelper = require('../Helpers/ResponseHelper')
const UserController = require('../Controllers/UserController')
const ValidationHelper = require('../Helpers/ValidationHelper')

const routerUsers = express.Router()

/**
 * @route POST /users/
 * @group users
 * @param {AddUser.model} req.body.required
 * @returns {AddUser} 200 - Created User
 * @returns {Error}  default - Unexpected error
 */
routerUsers.post('/', (req, res) => {
    UserController.addUser(req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

/**
 * @route PATCH /users/{id}
 * @group users
 * @security JWT
 * @param {int} id.path
 * @param {User.model} req.body.required
 * @returns {User} 200 - Updated partial user info
 * @returns {Error}  default - Unexpected error
 */
routerUsers.patch('/:id', (req, res) => {
    ValidationHelper.validatePermission(req.params.id, req.User, res);

    UserController.updatePartialUser(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

/**
 * @route PUT /users/{id}
 * @group users
 * @security JWT
 * @param {int} id.path
 * @param {User.model} req.body.required
 * @returns {User} 200 - An user
 * @returns {Error}  default - Unexpected error
 */
routerUsers.put('/:id', (req, res) => {
    ValidationHelper.validatePermission(req.params.id, req.User, res);

    UserController.updateUser(req.params.id, req.body, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data));
    })
})

/**
 * @route GET /users/
 * @group users
 * @security JWT
 * @returns {User[]} 200 - An array of users
 * @returns {Error}  default - Unexpected error
 */
routerUsers.get('/', (req, res) => {
    ValidationHelper.validatePermission(null, req.User, res);

    UserController.list((error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

/**
 * @route GET /users/{id}
 * @group users
 * @security JWT
 * @param {int} id.path
 * @returns {User} 200 - An user
 * @returns {Error}  default - Unexpected error
 */
routerUsers.get('/:id', (req, res) => {
    ValidationHelper.validatePermission(req.params.id, req.User, res);

    UserController.findUser(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})

/**
 * @route DELETE /users/{id}
 * @group users
 * @security JWT
 * @param {int} id.path
 * @returns {User} 200 - User deletion successfully
 * @returns {Error}  default - Unexpected error
 */
routerUsers.delete('/:id', (req, res) => {
    ValidationHelper.validatePermission(req.params.id, req.User, res);

    UserController.deleteUser(req.params.id, (error, data) => {
        res.json(ResponseHelper.createResponse(error, data))
    })
})




/**
 * @typedef AddUser
 * @property {string} nome.required
 * @property {string} mail.required
 * @property {string} senha.required
 * @property {string} tipo_usuario.required
 */

/**
 * @typedef User
 * @property {string} nome.required
 * @property {string} mail.required
 * @property {string} senha.required
 * @property {string} tipo_usuario.required
 * @property {string} cpf_cnpj.required
 * @property {string} bairro
 * @property {string} descricao
 * @property {string} rua
 * @property {string} uf
 * @property {string} cidade
 * @property {string} complemento
 * @property {string} numero
 * @property {string} cep
 * @property {string} url_foto
 * @property {string} telefone_casa
 * @property {string} telefone_celular
 * @property {Array.<Skill>} habilidades
 * @property {Array.<Experience>} experiencias
 */

 /**
  * @typedef Skill
  * @property {string} titulo.required
  * @property {string} instituicao.required
  * @property {string} data_inicio.required
  * @property {string} data_fim.required
  */

  /**
   * @typedef Experience
   * @property {string} local.required
   * @property {string} funcao.required
   * @property {string} data_inicio.required
   * @property {string} data_fim.required
   */
module.exports = routerUsers
