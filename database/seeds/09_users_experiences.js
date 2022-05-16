exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('usuario_experiencia')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('usuario_experiencia').insert([
            {
                "id_usuario": 4,
                "local": "Dell",
                "funcao": "Programador",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_usuario": 4,
                "local": "Stefanini",
                "funcao": "Programador",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            }
        ])
      })
  }
