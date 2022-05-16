const config = require('../config/config')

class DatabaseUtils {
    static checkDatabase() {
        const db = require('../database');
        db.raw('select 1+1 as result')
        .then(_ => console.log(`Conexão com o banco ${config.db.host} na porta ${config.db.port} OK!`))      
        .catch(err => {
            console.log(err);
            console.log(`Banco de dados off ou não configurado!\nInstale o mysql e utilize o comando abaixo para criar o schema\nCREATE DATABASE job_quest`)
        });
    }
}

module.exports = DatabaseUtils