const constants = require("../config/contants");
const DAO = require("../DAO/VacancyDAO");
const MatchDAO = require("../DAO/MatchDAO");
const MatchStatusEnum = require("../Helpers/MatchStatusEnum");

const joinSkills = (list) =>
  list.reduce((acc, curr) => {
    const indexFound = acc.findIndex((item) => item.id_vaga === curr.id_vaga);
    if (indexFound >= 0) {
      curr.nome_habilidade &&
        acc[indexFound].habilidades.push(curr.nome_habilidade);
      return acc;
    }
    curr.habilidades = curr.nome_habilidade ? [curr.nome_habilidade] : [];
    curr.nome_habilidade = undefined;
    return [...acc, curr];
  }, []);

class VacancyController {
  static async list(tipo, area, user, response) {
    try {
      if (!tipo && !area) {
        //listar tudo,
        const data = joinSkills(await DAO.list());

        response(null, data);
      } else if (!tipo && area) {
        //listar tudo de uma area
        response(null, await DAO.listByArea(area));
      } else {
        //filtra conforme o tipo de match
        await VacancyController.listWithMatchType(tipo, user, response);
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async listWithMatchType(tipo, user, response) {
    if (MatchStatusEnum.NENHUM === tipo) {
      //filtra as vagas disponiveis para o usuário pela sua área
      const matchVacancyIds = [];
      const matchs = await MatchDAO.listMatchVacancyIdsByUser(user.id_usuario);
      matchs.map((match) => matchVacancyIds.push(match.id_vaga));
      console.log(matchVacancyIds);
      const data = joinSkills(
        await DAO.listByNotMatched(user.id_usuario, matchVacancyIds)
      );
      response(null, data);
    } else {
      //filtra a lista pelo tipo de match com o usuario
      response(null, await DAO.listByUserAndMatchType(user.id_usuario, tipo));
    }
  }

  static async listWorkPeriod(response) {
    try {
      response(null, await DAO.findWorkPeriods());
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async findVacancy(id, response) {
    try {
      let data = await DAO.findVacancyById(id);
      if (data) {
        const skills = await DAO.findSkillsVacancy(id);
        data = { ...data, habilidades: skills };
        response(null, data);
      } else {
        response(
          { code: constants.invalidVacancy, desc: constants.notFoundDesc },
          null
        );
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async findVacanciesByCompany(id_empresa, response) {
    try {
      let data = await joinSkills(await DAO.findVacanciesByCompany(id_empresa));
      if (data) {
        response(null, data);
      } else {
        response(
          { code: constants.invalidVacancy, desc: constants.notFoundDesc },
          null
        );
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async addVacancy(newVacancy, user, response) {
    try {
      newVacancy = {
        ...newVacancy,
        id_empresa: user.empresa.id_empresa,
      };
      const data = await DAO.save(newVacancy);
      const id_vaga = data[0];
      if (!!newVacancy.habilidades) {
        newVacancy.habilidades.forEach(async (id_habilidade) => {
          await DAO.saveSkillVacancy(id_vaga, id_habilidade);
        });
      }

      if (!!newVacancy.horarios) {
        newVacancy.horarios.forEach(async (id_horario) => {
          await DAO.saveWorkPeriodVacancy(id_vaga, id_horario);
        });
      }
      response(null, { id_vaga });
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async updateVacancy(id, vacancy, response) {
    try {
      const data = await DAO.update(id, vacancy, response);
      if (data) {
        response(null, data);
      } else {
        response(
          { code: constants.invalidVacancy, desc: constants.notFoundDesc },
          null
        );
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async updatePartialVacancy(vacancy, response) {
    try {
      const data = await DAO.update(vacancy.id_vaga, vacancy, response);
      if (data) {
        response(null, data);
      } else {
        response(
          { code: constants.invalidVacancy, desc: constants.notFoundDesc },
          null
        );
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }

  static async deleteVacancy(id, response) {
    try {
      const data = await DAO.delete(id);
      if (data) {
        response(null, data);
      } else {
        response(
          { code: constants.invalidVacancy, desc: constants.notFoundDesc },
          null
        );
      }
    } catch (e) {
      console.log(e);
      response(constants.genericError, e);
    }
  }
}

module.exports = VacancyController;
