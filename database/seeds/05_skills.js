exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('habilidades')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('habilidades').insert([
            {
                "nome": "PL/SQL"
            },
            {
                "nome": "JPA/ Hibernate"
            },
            {
                "nome": "Spring Boot"
            },
            {
                "nome": "Scrum"
            },
            {
                "nome": "Excel"
            },
            {
                "nome": "AWS"
            },
            {
                "nome": "Docker"
            },
            {
                "nome": "Windows"
            },
            {
                "nome": "Pacote Office"
            },
            {
                "nome": "Linux"
            },
            {
                "nome": "Swift"
            },
            {
                "nome": "Mac OS"
            },
            {
                "nome": "Mobile"
            },
        ])
      })
  }