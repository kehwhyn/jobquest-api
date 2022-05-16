const db = require('../database');

class SkillDAO {

    static list() {
        return db.select()
        .from('habilidades')
    }

    static findSkillById(id) {
        return db.select()
        .from('habilidades')
        .where('id_habilidade', id)
        .first()
    }

    static findSkillByNome(nome) {
        return db.select()
        .from('habilidades')
        .where('nome', nome)
        .first()
    }


    static findSkillsByIdUsuario(id) {
      return db
        .select(
          "h.*",
          "uh.instituicao as instituicao",
          "uh.data_inicio as data_inicio",
          "uh.data_fim as data_fim",
        )
        .from("habilidades as h")
        .join("usuario_habilidade as uh", "uh.id_habilidade", "h.id_habilidade")
        .where("uh.id_usuario", id);
    }

    static save(nome) {
        return db('habilidades')
        .insert({
            nome
        });
    }

    static update(id, skill){
        return db('habilidades')
        .where("id_habilidade", id)
        .update(skill)
    }

    static delete(id){
        return db('habilidades')
        .where("id_habilidade", id)
        .del()
    }

    static saveUserSkill(id_habilidade, id_usuario, skill) {
      return db('usuario_habilidade')
      .insert({
          id_usuario,
          id_habilidade,
          ...skill
      });
    }

    static deleteUserSkills(id){
        return db('usuario_habilidade')
        .where("id_usuario", id)
        .del()
    }
}

module.exports = SkillDAO
