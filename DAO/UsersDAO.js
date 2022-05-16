const db = require('../database');

class UsersDAO {

    static list() {
        return db.select()
        .from('usuarios')
    }

    static findUserById(id) {
        return db.select()
        .from('usuarios')
        .where('id_usuario', id)
        .first()
    }

    static findUserSkills(id){
        return db("habilidades")
        .join(
          "usuario_habilidade",
          "usuario_habilidade.id_habilidade",
          "=",
          "habilidades.id_habilidade"
        )
        .join("usuarios", "usuarios.id_usuario", "=", "usuario_habilidade.id_usuario")
        .where("usuarios.id_usuario", id)
        .select("habilidades.id_habilidade", "habilidades.nome");
    }

    static findUserShiftsById(id) {
        return db.select()
        .from('usuarios_turnos')
        .where('id_usuario', id)
    }

    static findUserByEmailAndPassword(email, senha) {
        return db.select()
        .from('usuarios')
        .where({mail: email, senha})
        .first()
    }

    static save({nome, mail, senha, tipo_usuario}) {
        return db('usuarios')
        .insert({nome, mail, senha, tipo_usuario});
    }

    static update(id, user){
        return db('usuarios')
        .where("id_usuario", id)
        .update(user)
    }

    static delete(id){
        return db('usuarios')
        .where("id_usuario", id)
        .del()
    }
}

module.exports = UsersDAO
