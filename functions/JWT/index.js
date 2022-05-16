const crypto = require('crypto');

function userToken(login, password) {
  const header = JSON.stringify({
    'alg': 'HS256',
    'typ': 'JWT'
  });
  
  const payload = JSON.stringify({
    login,
    password
  });

  const base64header = Buffer.from(header).toString('base64').replace(/=/g, '');
  const base64payload = Buffer.from(payload).toString('base64').replace(/=/g, '');

  const secret = 'acton-academia';
  const data = base64header + '.' + base64payload;

  const signarute = crypto
    .createHmac('sha512', secret)
    .update(data)
    .digest('base64')
  ;

  const signaruteURL = signarute
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
  ;

  return signaruteURL;
}

module.exports = userToken;