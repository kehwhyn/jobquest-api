const constants = require('../config/contants')
const DAO = require('../DAO/MatchDAO')
const VacancyDAO = require('../DAO/VacancyDAO')
const UsersDAO = require('../DAO/UsersDAO')
const MatchStatusEnum = require('../Helpers/MatchStatusEnum')

class MatchController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findMatch(id, response) {
        try {
            const data = await DAO.findMatchById(id);
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidMatch, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addMatch(newMatch, user, response) {
        try {
            const { id_vaga, descartado } = newMatch
            const { id_usuario } = user

            const vaga = await VacancyDAO.findVacancyById(id_vaga);
            const vaga_habilidades = await VacancyDAO.findVacancySkills(id_vaga);
            const usuario_habilidades = await UsersDAO.findUserSkills(id_usuario);
   
            if (!!descartado && descartado) { //usuario descartou a vaga
                return await MatchController.createMatch(id_vaga, id_usuario, vaga, response, MatchStatusEnum.DESCARTADO, false)
            }

            const habilidades_faltantes = MatchController.compareSkills(vaga_habilidades, usuario_habilidades)

            if (habilidades_faltantes.length <= 0) { //deu match
                return await MatchController.createMatch(id_vaga, id_usuario, vaga, response, MatchStatusEnum.APROVADO, true)
            } else { //n deu match
                return await MatchController.createMatch(id_vaga, id_usuario, vaga, response, MatchStatusEnum.RECUSADO, false, habilidades_faltantes)
            }

        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateMatch(id, match, response) {
        try {
            const data = await DAO.update(id, match, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidMatch, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updatePartialMatch(match, response) {
        try {
            const data = await DAO.update(match.id_match, match, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidMatch, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }


    static async deleteMatch(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidMatch, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async createMatch(id_vaga, id_usuario, vaga, response, status, match, habilidades_faltantes = []) {
        const data = await DAO.save({
            id_vaga,
            id_usuario,
            id_area: vaga.id_area,
            status,
            updated_at: new Date()
        })
        response(null, { id_match: data[0], match, habilidades_faltantes })
    }

    static compareSkills(vaga_habilidades, usuario_habilidades) {
        const habilidades_faltantes = []
        vaga_habilidades.forEach(vaga_habilidade => {
            const match_skill = usuario_habilidades.find(usuario => vaga_habilidade.id_habilidade === usuario.id_habilidade)
            if (!match_skill) {
                habilidades_faltantes.push(vaga_habilidade)
            }
        })
        return habilidades_faltantes
    }
}

module.exports = MatchController