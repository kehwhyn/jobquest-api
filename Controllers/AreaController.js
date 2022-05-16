const constants = require('../config/contants')
const DAO = require('../DAO/AreaDAO')

class AreaController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findArea(id, response) {
        try {
            const data = await DAO.findAreaById(id);
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidArea, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addArea(newArea, response) {
        try {
            const data = await DAO.save(newArea)
            response(null, { id_area: data[0] })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateArea(id, area, response) {
        try {
            const data = await DAO.update(id, area, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidArea, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updatePartialArea(area, response) {
        try {
            const data = await DAO.update(area.id_area, area, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidArea, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }


    static async deleteArea(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidArea, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }
}

module.exports = AreaController