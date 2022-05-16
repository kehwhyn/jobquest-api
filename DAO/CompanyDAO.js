const db = require('../database');

class CompanyDAO {

    static list() {
        return db.select()
        .from('empresas')
    }

    static findCompanyById(id) {
        return db.select()
        .from('empresas')
        .where('id_empresa', id)
        .first()
    }

    static findCompanyByIdUsuario(id_usuario) {
        return db.select()
        .from('empresas')
        .where('id_usuario', id_usuario)
        .first()
    }

    static save({razao_social, logo_url, id_usuario}) {
        return db('empresas')
        .insert({razao_social, logo_url, id_usuario});
    }

    static update(id, company){
        return db('empresas')
        .where("id_empresa", id)
        .update(company)
    }

    static delete(id){
        return db('empresas')
        .where("id_empresa", id)
        .del()
    }
}

module.exports = CompanyDAO