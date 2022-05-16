exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('match_usuario_vaga')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('match_usuario_vaga').insert([
            {
                "id_area": 1,
                "id_vaga": 1,
                "id_usuario": 2,
                "status": "A", //A - Aprovado (match), D - descartado (descartou a vaga), R - Recusado (n deu match)
                "updated_at": new Date()
            }
        ])
      })
  }