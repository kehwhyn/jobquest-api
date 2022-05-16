const db = require("../database");

class VacancyDAO {
  static list() {
    return db
      .select(
        "v.*",
        "a.nome as area",
        "u.nome as empresa",
        "u.url_foto as img_url",
        "h.nome as nome_habilidade"
      )
      .from("vagas as v")
      .leftJoin("areas as a", "v.id_area", "a.id_area")
      .leftJoin("usuarios as u", "v.id_empresa", "u.id_usuario")
      .leftJoin("vaga_habilidade as vh", "v.id_vaga", "vh.id_vaga")
      .leftJoin("habilidades as h", "h.id_habilidade", "vh.id_habilidade");
  }

  static listByUserAndMatchType(id_usuario, tipo) {
    return db
      .select(
        "v.*",
        "a.nome as area",
        "u.nome as empresa",
        "u.url_foto as img_url",
        "h.nome as nome_habilidade"
      )
      .from("vagas as v")
      .leftJoin("areas as a", "v.id_area", "a.id_area")
      .leftJoin("usuarios as u", "v.id_empresa", "u.id_usuario")
      .leftJoin("vaga_habilidade as vh", "v.id_vaga", "vh.id_vaga")
      .leftJoin("habilidades as h", "h.id_habilidade", "vh.id_habilidade")
      .join("match_usuario_vaga as m", "v.id_vaga", "m.id_vaga")
      .where("m.status", tipo)
      .andWhere("m.id_usuario", id_usuario);
  }

  static listByNotMatched(id_usuario, matchVacancyIds) {
    console.log("nm", id_usuario);
    return db
      .select(
        "v.*",
        "a.nome as area",
        "u.nome as empresa",
        "u.url_foto as img_url",
        "h.nome as nome_habilidade"
      )
      .from("vagas as v")
      .leftJoin("areas as a", "v.id_area", "a.id_area")
      .leftJoin("usuarios as u", "v.id_empresa", "u.id_usuario")
      .leftJoin("vaga_habilidade as vh", "v.id_vaga", "vh.id_vaga")
      .leftJoin("habilidades as h", "h.id_habilidade", "vh.id_habilidade")
      .whereNotIn("v.id_vaga", matchVacancyIds);
  }

  static listByArea(area) {
    return db
      .select(
        "v.*",
        "a.nome as area",
        "u.nome as empresa",
        "u.url_foto as img_url"
      )
      .from("vagas as v")
      .leftJoin("areas as a", "v.id_area", "a.id_area")
      .leftJoin("usuarios as u", "v.id_empresa", "u.id_usuario")
      .where("a.id_area", area);
  }

  static findVacancyById(id) {
    return db.select().from("vagas").where("id_vaga", id).first();
  }

  static findVacancySkills(id) {
    return db("habilidades")
      .join(
        "vaga_habilidade",
        "vaga_habilidade.id_habilidade",
        "=",
        "habilidades.id_habilidade"
      )
      .join("vagas", "vagas.id_vaga", "=", "vaga_habilidade.id_vaga")
      .where("vagas.id_vaga", id)
      .select("habilidades.id_habilidade", "habilidades.nome");
  }

  static findVacanciesByCompany(id_empresa) {
    return db
      .select(
        "v.*",
        "a.nome as area",
        "u.nome as empresa",
        "u.url_foto as img_url",
        "h.nome as nome_habilidade"
      )
      .from("vagas as v")
      .leftJoin("areas as a", "v.id_area", "a.id_area")
      .leftJoin("usuarios as u", "v.id_empresa", "u.id_usuario")
      .leftJoin("vaga_habilidade as vh", "v.id_vaga", "vh.id_vaga")
      .leftJoin("habilidades as h", "h.id_habilidade", "vh.id_habilidade").where("id_empresa", id_empresa);
  }

  static findWorkPeriods() {
    return db.select().from("horario");

  }

  static save(vacancy) {
    const { id_empresa, id_area, nome, quantidade, endereco, horario, descricao } = vacancy;
    return db("vagas").insert({
      id_empresa,
      id_area,
      nome,
      quantidade,
      endereco,
      horario,
      descricao,
    });
  }

  static saveSkillVacancy(id_vaga, id_habilidade) {
    return db("vaga_habilidade").insert({
      id_vaga,
      id_habilidade,
    });
  }

  static saveWorkPeriodVacancy(id_vaga, id_horario) {
    return db("vaga_horario").insert({
      id_vaga,
      id_horario,
    });
  }

  static update(id, vacancy) {
    return db("vagas").where("id_vaga", id).update(vacancy);
  }

  static delete(id) {
    return db("vagas").where("id_vaga", id).del();
  }
}

module.exports = VacancyDAO;
