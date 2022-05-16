const db = require('../database');

class UserShiftDAO {

    static save(obj) {
      return db('usuarios_turnos')
      .insert(obj);
    }

    static deleteShifts(id) {
        return db('usuarios_turnos')
        .where("id_usuario", id)
        .del()
    }
}

module.exports = UserShiftDAO
