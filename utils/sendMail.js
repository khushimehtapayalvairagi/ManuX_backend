import nodemailer from "nodemailer";

export const sendContactMail = async (contact) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.ADMIN_EMAIL, // ✅ client email from env
    subject: "New Contact Message",
    html: `
      <p><b>Name:</b> ${contact.name}</p>
      <p><b>Email:</b> ${contact.email}</p>
      <p><b>Phone:</b> ${contact.phone}</p>
      <p><b>Message:</b> ${contact.message}</p>
    `
  });
};