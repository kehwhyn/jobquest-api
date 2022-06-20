exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('horario')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('horario').insert([
            {
                "id_horario":1,
                "nome": "Manha"
            },
            {
                "id_horario":2,
                "nome": "Tarde"
            },
            {
                "id_horario":3,
                "nome": "Noite"
            },
            {
                "id_horario":4,         //Para adicionar o turno flexivel é necessario atualizar os seeds
                "nome": "Flexivel"
            }
        ])
      })
  }