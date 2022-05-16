const constants = require('../config/contants')
const DAO = require('../DAO/SkillDAO')

class SkillController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findSkill(id, response) {
        try {
            const data = await DAO.findSkillById(id);
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidSkill, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addSkill(newSkill, response) {
        try {
            const data = await DAO.save(newSkill)
            response(null, { id_habilidade: data[0] })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateSkill(id, skill, response) {
        try {
            const data = await DAO.update(id, skill, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidSkill, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updatePartialSkill(skill, response) {
        try {
            const data = await DAO.update(skill.id_habilidade, skill, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidSkill, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }


    static async deleteSkill(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidSkill, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }
}

module.exports = SkillController
