exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('usuario_habilidade')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('usuario_habilidade').insert([
            {
                "id_habilidade": 1,
                "id_usuario": 4,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 2,
                "id_usuario": 4,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 3,
                "id_usuario": 4,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 4,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 5,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 6,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 7,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 8,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 9,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 10,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 11,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 12,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            },
            {
                "id_habilidade": 13,
                "id_usuario": 2,
                "instituicao": "PUC",
                "data_inicio": "2015-11-20",
                "data_fim": "2017-11-20"
            }
        ])
      })
  }
