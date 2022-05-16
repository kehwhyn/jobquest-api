const constants = require('../config/contants')
const UsersDAO = require('../DAO/UsersDAO')
const DAO = require('../DAO/CompanyDAO')

class CompanyController {

    static async list(response) {
        try {
            response(null, await DAO.list());
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async findCompany(id, response) {
        try {
            let companyData = await DAO.findCompanyByIdUsuario(id);
            if (!companyData) {
                response({ code: constants.invalidCompany, desc: constants.notFoundDesc }, null);
                return
            }

            const userData = await UsersDAO.findUserById(companyData.id_usuario);

            if (!userData) {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
                return
            }
            const {
                id_empresa,
                id_usuario,
                mail,
                nome,
                razao_social,
                url_site,
                logo_url,
                cpf_cnpj,
                descricao,
                cep,
                rua,
                bairro,
                cidade,
                complemento,
                numero,
                uf,
                telefone_casa,
                telefone_celular
            } = { ...companyData, ...userData }


            response(null, {
                id_empresa,
                id_usuario,
                nome,
                email: mail,
                razao_social,
                url_site,
                logo_url,
                cpf_cnpj,
                descricao,
                endereco: {
                    cep,
                    rua,
                    bairro,
                    cidade,
                    complemento,
                    numero,
                    uf
                },
                contato: {
                    telefone_casa,
                    telefone_celular
                }
            })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e);
        }
    }

    static async addCompany(newCompany, response) {
        try {
            const data = await DAO.save(newCompany)
            response(null, { id_empresa: data[0] })
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updateCompany(id, company, response) {
        try {
            const data = await DAO.update(id, company, response)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidCompany, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }

    static async updatePartialCompany(id, updatedCompanyRequest, response) {
        try {
            const {
                id_usuario,
                nome,
                razao_social,
                url_site,
                logo_url,
                cpf_cnpj,
                endereco,
                contato,
                descricao
            } = updatedCompanyRequest;

            const updatedCompany = { razao_social, logo_url, url_site };
            console.log(updatedCompany)

            const companyResult = await DAO.update(id, updatedCompany, response);

            if (!companyResult) {
                response({ code: constants.invalidcompany, desc: constants.notFoundDesc }, null);
                return;
            }

            const updatedUser = {
                nome,
                descricao,
                cpf_cnpj,
                cep: endereco.cep,
                rua: endereco.rua,
                bairro: endereco.bairro,
                cidade: endereco.cidade,
                complemento: endereco.complemento,
                numero: endereco.numero,
                uf: endereco.uf,
                telefone_casa: contato.telefone_casa,
                telefone_celular: contato.telefone_celular
            };
            console.log(id_usuario, { ...updatedUser, updated_at: new Date() })


            const userResult = await UsersDAO.update(id_usuario, { ...updatedUser, updated_at: new Date() })
            if (!userResult) {
                response({ code: constants.invalidUser, desc: constants.notFoundDesc }, null);
                return;
            }

            response(null, companyResult);
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }


    static async deleteCompany(id, response) {
        try {
            const data = await DAO.delete(id)
            if (data) {
                response(null, data)
            } else {
                response({ code: constants.invalidCompany, desc: constants.notFoundDesc }, null);
            }
        } catch (e) {
            console.log(e)
            response(constants.genericError, e)
        }
    }
}

module.exports = CompanyController