const db = require('../database');

class MatchDAO {

    static list() {
        return db.select()
        .from('match_usuario_vaga')
    }
    
    static listMatchVacancyIdsByUser(id) {
        return db
        .select(
            "m.id_vaga"
          )        
        .from('match_usuario_vaga as m')
        .where('id_usuario', id)
    }
    
    static listByUserId(id) {
        return db.select()
        .from('match_usuario_vaga')
        .where('id_usuario', id)
    }

    static findMatchById(id) {
        return db.select()
        .from('match_usuario_vaga')
        .where('id_match', id)
        .first()
    }

    static save(match) {
        return db('match_usuario_vaga')
        .insert(match);
    }

    static update(id, match){
        return db('match_usuario_vaga')
        .where("id_match", id)
        .update(match)
    }

    static delete(id){
        return db('match_usuario_vaga')
        .where("id_match", id)
        .del()
    }
}

module.exports = MatchDAO