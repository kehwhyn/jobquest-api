const db = require('../database');

class ExperienceDAO {

    static findExperiencesByIdUsuario(id) {
        return db.select()
        .from('usuario_experiencia')
        .where('id_usuario', id)
    }

    static saveUserExperience(experience) {
      return db('usuario_experiencia')
      .insert(experience);
    }

    static deleteUserExperiences(id) {
        return db('usuario_experiencia')
        .where("id_usuario", id)
        .del()
    }
}

module.exports = ExperienceDAO
