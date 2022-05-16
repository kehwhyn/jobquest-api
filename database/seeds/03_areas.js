exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('areas')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('areas').insert([
            {
                "nome": "Tecnologia da Informação"
            },
            {
                "nome": "Engenharia Civil"
            },
            {
                "nome": "Direito"
            },
            {
                "nome": "Medicina"
            }
        ])
      })
  }