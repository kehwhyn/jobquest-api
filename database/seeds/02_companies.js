exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("empresas")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("empresas").insert([
        {
          razao_social: "empresa 1 ltda",
          logo_url:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
          id_usuario: 5,
        },
        {
          razao_social: "empresa 2 ltda",
          logo_url:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
          id_usuario: 6,
        },
        {
          razao_social: "empresa 3 ltda",
          logo_url:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
          id_usuario: 7,
        },
      ]);
    });
};
