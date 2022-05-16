const constants = require('../config/contants')
const DAO = require('../DAO/UsersDAO')
const SkillDAO = require('../DAO/SkillDAO')
const ExperienceDAO = require('../DAO/ExperienceDAO')
const UserShiftDAO = require('../DAO/UserShiftDAO')

class UserController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findUser(id, response) {
        try {
            const data = await DAO.findUserById(id);
            const shifts = (await DAO.findUserShiftsById(id)).map(s => s.turno);
            const skills = await SkillDAO.findSkillsByIdUsuario(id);
            const experiences = await ExperienceDAO.findExperiencesByIdUsuario(id);

            if (data) {
                data.turnos = shifts ? shifts : [];

                data.habilidades = skills ? skills : [];

                data.experiencias = experiences ? experiences : [];

                response(null, data);
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);

            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addUser(newUser, response) {
        try {
            const data = await DAO.save(newUser)
            response(null, { id_usuario: data[0] })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateUser(id, user, response) {
        try {
            const data = await DAO.update(id, {...user, updated_at: new Date()}, response)

            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updatePartialUser(id, user, response) {
        try {
            const data = saveUser(id, user, response);
            saveSkills(id, user);
            saveExperiences(id, user);
            saveShifts(id, user);

            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async deleteUser(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }
}

async function saveUser(id, user, response) {
  return await DAO.update(id,
    {
      cpf_cnpj: user.cpf_cnpj,
      uf: user.uf,
      rua: user.rua,
      bairro: user.bairro,
      cidade: user.cidade,
      complemento: user.complemento,
      numero: user.numero,
      cep: user.cep,
      telefone_casa: user.telefone_casa,
      telefone_celular: user.telefone_celular,
      descricao: user.descricao,
      updated_at: new Date()
   }, response);

};

async function saveSkills(id, user) {
  user.habilidades.forEach(async(habilidade) => {

//      const hab = await SkillDAO.findSkillByNome(habilidade.nome);

//      if (!hab) {
      const  hab = await SkillDAO.save(habilidade.nome);
//      }

     await SkillDAO.saveUserSkill(hab[0], id, {
          instituicao: habilidade.instituicao,
          data_inicio: habilidade.data_inicio,
          data_fim: habilidade.data_fim
      });
  });

};

async function saveExperiences(id, user) {
  user.experiencias.forEach(async(experiencia) => {

    await ExperienceDAO.saveUserExperience({
        id_usuario: id,
        local: experiencia.local,
        funcao: experiencia.funcao,
        data_inicio: experiencia.data_inicio,
        data_fim: experiencia.data_fim
    });
  });

};

async function saveShifts(id, user) {
  await UserShiftDAO.deleteShifts(id);

  user.turnos.forEach(async(turno) => {


    await UserShiftDAO.save({
        id_usuario: id,
        turno
    });
  });

};
module.exports = UserController
