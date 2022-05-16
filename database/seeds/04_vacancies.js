exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('vagas')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('vagas').insert([
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Desenvolvedor Java",
                "quantidade": 5,
                "endereco":"rua x",
                "horario":"1",
                "descricao": "Vaga para desenvolvedor junior Java"
            },
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Desenvolvedor Java",
                "quantidade": 5,
                "endereco":"rua x",
                "horario":"1",
                "descricao": "Vaga para desenvolvedor pleno Java"
            },
            {
                "id_empresa": 2,
                "id_area": 2,
                "nome": "Consultor de obras",
                "quantidade": 3,
                "endereco":"rua x",
                "horario":"1",
                "endereco":"rua x",
                "descricao": "Vaga para engenheiro civil"
            },
            {
                "id_empresa": 3,
                "id_area": 3,
                "nome": "Estagiario de Direito",
                "quantidade": 2,
                "endereco":"rua x",
                "horario":"1",
                "descricao": "Vaga para estagiario de direito"
            },
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Estagiario de Manutenção",
                "quantidade": 1,
                "descricao": "Manutenção de computadores, não é necessário Experiencia"
            },
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Desenvolvedor Python",
                "quantidade": 4,
                "descricao": "Vaga para desenvolvedor python senior."
            },
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Desenvolvedor Node.JS",
                "quantidade": 2,
                "descricao": "Vaga para desenvolvedor Node.JS junior."
            },
            {
                "id_empresa": 1,
                "id_area": 1,
                "nome": "Analista de Testes",
                "quantidade": 3,
                "descricao": "Vaga para analista junior de testes."
            },
            {
                "id_empresa": 2,
                "id_area": 2,
                "nome": "Engenheiro Civil",
                "quantidade": 3,
                "descricao": "Vaga para Engenheiro civil com pelo menos 2 anos de experiência"
            },
            {
                "id_empresa": 3,
                "id_area": 3,
                "nome": "Advogado Cível",
                "quantidade": 2,
                "descricao": "Necessário pelo menos 2 anos de experiencia na área."
            },
        ])
      })
  }