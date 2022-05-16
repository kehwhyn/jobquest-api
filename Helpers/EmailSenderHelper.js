const constants = require("../config/contants");
const nodemailer = require("nodemailer");

class EmailSenderHelper {

  /**
   * Função que envia emails.
   * @param {Mensagem} msg 
   * @param {Assunto} subject 
   * @param {Destinatário} recipent 
   */
  static sendEmail(msg, subject, recipent) {
    var transport = nodemailer.createTransport({
      service: constants.returnSMTPProvider,
      auth: {
        user: constants.returnEmailSender,
        pass: constants.returnPasswordSender
      }
    });
    var mailOptions = {
      from: constants.returnEmailSender, // sender address
      to: recipent, // list of receivers
      subject: subject, // Subject line
      text: msg
    };
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  }
    
}

module.exports = EmailSenderHelper
