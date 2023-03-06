import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USSER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  form: process.env.EMAIL_USSER,
  to: process.env.EMAIL_USSER,
};
