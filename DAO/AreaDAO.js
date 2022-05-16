const db = require('../database');

class AreaDAO {

    static list() {
        return db.select()
        .from('areas')
    }

    static findAreaById(id) {
        return db.select()
        .from('areas')
        .where('id_area', id)
        .first()
    }

    static save({nome}) {
        return db('areas')
        .insert({
            nome
        });
    }

    static update(id, area){
        return db('areas')
        .where("id_area", id)
        .update(area)
    }

    static delete(id){
        return db('areas')
        .where("id_area", id)
        .del()
    }
}

module.exports = AreaDAO