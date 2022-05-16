const connection = require('../database');

const Jwt = require('../functions/JWT');

module.exports = {
  async login(request, response) {
    const { mail } = request.body;
    const password = request.headers.authorization;
    const user = await connection('usuarios')
      .where({
        'mail' : mail,
        'senha' : password
      })
      .select('*')
      .first()
    ;

    if(!user) {
      console.log('error');
      return response.status(400).json({ error: 'Nenhum usuário encontrado.' });
    }

    return response.status(201).json({
      token: Jwt(mail, password),
      body: user
    });
  },
}
