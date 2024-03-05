import nodemailer from "nodemailer";

interface data {
  to: string;
  body: string;
  subject: string;
  user: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  service: process.env.SMTP_SERVICE,
  auth: {
    user: "it.developer2002@gmail.com",
    pass: "cdzbzltjmuwrhfvr",
  },
});

async function main(data: data) {
  console.log(process.env.SMTP_MAIL);
  await transporter.sendMail({
    from: process.env.SMTP_MAIL,
    to: data.to,
    subject: data.subject,
    text: data.body,
  });
}

export default main;
