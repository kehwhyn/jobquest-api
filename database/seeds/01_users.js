exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("usuarios")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("usuarios").insert([
        {
          nome: "admin",
          mail: "admin@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "admin",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Joao Silva",
          mail: "joao@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "user",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Maria Flores",
          mail: "maria@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "user",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Paulo Neves",
          mail: "paulo@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "user",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Marco Castro",
          mail: "empresa1@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "company",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Gilberto Costa",
          mail: "empresa2@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "company",
          url_foto:
            "https://evencard.com.br/evenblog/wp-content/uploads/2020/03/03.png",
        },
        {
          nome: "Carlos Lopes",
          mail: "empresa3@gmail.com",
          senha:
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", //123456
          tipo_usuario: "company",
        },
      ]);
    });
};
