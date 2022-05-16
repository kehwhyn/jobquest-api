exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('vaga_habilidade')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('vaga_habilidade').insert([
            {
                "id_vaga": 1,
                "id_habilidade": 3
            },
            {
                "id_vaga": 1,
                "id_habilidade": 4
            },
            {
                "id_vaga": 2,
                "id_habilidade": 1
            },
            {
                "id_vaga": 2,
                "id_habilidade": 2
            },
            {
                "id_vaga": 3,
                "id_habilidade": 8
            },
            {
                "id_vaga": 3,
                "id_habilidade": 9
            },
            {
                "id_vaga": 4,
                "id_habilidade": 8
            },
        ])
      })
  }