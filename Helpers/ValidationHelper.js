const constants = require('../config/contants')
const PerfilEnum = require('./PerfilEnum')

class ValidationHelper {
    

    static validCPF(cpf) {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }

    static validCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;
        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = cnpj.length - 2
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;
    }

    static validName(name) {
        return (!!name && name.length > 0 && name.length <= 100)
    }

    static validPassword(password) {
        return !!password && password.length === constants.sha256size
    }

    static validEmail(email) {
        return !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    static validSignUp(newUser) {
        let message;

        if (!ValidationHelper.validName(newUser.nome))
            message = constants.invalidName
        else if (!ValidationHelper.validEmail(newUser.email))
            message = constants.invalidEmail
        else if (!ValidationHelper.validPassword(newUser.senha))
            message = constants.invalidPassword
        else if (newUser.perfil == PerfilEnum.ADMIN)
            message = constants.invalidProfile

        return {
            valid: !message,
            message
        }
    }

    static validatePermission(idUser, tokenUser, res) {
        if (tokenUser.tipo_usuario !== 'admin' && !idUser && tokenUser.id_usuario !== idUser) {
            res.status(403).json({ msg: 'You do not have permission to do it.' });
        }
    }
    
}

module.exports = ValidationHelper