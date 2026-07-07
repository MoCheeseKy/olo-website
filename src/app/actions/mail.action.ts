"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(data: {
  nama: string;
  email: string;
  gender: string;
  whatsapp: string;
  catatan: string;
}) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_EMAIL || "olocondom@gmail.com";

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured. Simulating email send.");
      // Just simulate success if no credentials for development/testing
      return { success: true, simulated: true };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_PORT === "465" ? true : false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"OLO Contact Form" <${smtpUser}>`,
      to: targetEmail,
      subject: `Pesan Baru dari ${data.nama}`,
      text: `
Nama: ${data.nama}
Email: ${data.email}
Gender: ${data.gender}
WhatsApp: ${data.whatsapp}

Catatan:
${data.catatan}
      `,
      html: `
        <h3>Pesan Baru dari Form Kontak OLO</h3>
        <p><strong>Nama:</strong> ${data.nama}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
        <br/>
        <p><strong>Catatan:</strong></p>
        <p>${data.catatan.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message };
  }
}
