exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('vaga_horario')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('vaga_horario').insert([
            {
                "id_vaga": 1,
                "id_horario": 3
            },
            {
                "id_vaga": 1,
                "id_horario": 1
            },
            {
                "id_vaga": 2,
                "id_horario": 2
            },
            {
                "id_vaga": 2,
                "id_horario": 1
            },
            {
                "id_vaga": 3,
                "id_horario": 1
            },
            {
                "id_vaga": 3,
                "id_horario": 2
            },
            {
                "id_vaga": 4,
                "id_horario": 1
            },
        ])
      })
  }