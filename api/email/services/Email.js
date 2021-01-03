const nodemailer = require("nodemailer");

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});
module.exports = {
  send: (from, to, bcc, subject, html) => {
    // Setup e-mail data.

    const options = {
      from,
      to,
      bcc,
      bcc,
      subject,
      html,
    };

    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
};
