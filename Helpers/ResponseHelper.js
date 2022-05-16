const constants = require('../config/contants')

class ResponseHelper {
    static createResponse(error, data) {
        let json = {}
        if (!error) {
            json = {
                code: constants.successCode,
                desc: constants.successDesc,
                success: true,
                data: data
            }
        } else {
            json = {
                code: error.code,
                desc: error.desc,
                success: false,
                data: data
            }
        }
        return json
    }
}

module.exports = ResponseHelper