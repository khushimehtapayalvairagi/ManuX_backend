import nodemailer from "nodemailer";

export const sendContactMail = async (contact) => {
  console.log("📩 MAIL FUNCTION START");

  console.log("ENV CHECK:");
  console.log("EMAIL:", process.env.EMAIL);
  console.log("PASS:", process.env.EMAIL_PASS);
  console.log("ADMIN:", process.env.ADMIN_EMAIL);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log("🚀 Sending mail...");

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Message",
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${contact.name}</p>
        <p><b>Email:</b> ${contact.email}</p>
        <p><b>Phone:</b> ${contact.phone}</p>
        <p><b>Message:</b> ${contact.message}</p>
      `,
    });

    console.log("✅ MAIL SENT SUCCESS:", info.response);

  } catch (error) {
    console.log("❌ MAIL ERROR FULL:", error);
  }
};