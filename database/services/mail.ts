import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  debug: true,
});

export default transporter;
