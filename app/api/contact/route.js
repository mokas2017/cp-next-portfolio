// Force l'exécution côté Node.js pour utiliser nodemailer
export const runtime = "nodejs";
import nodemailer from "nodemailer";

// Route POST pour envoyer un email via Gmail
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    // Configuration du transporteur nodemailer avec Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      to: "medkarimslouma@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Mail error", error);
    return Response.json({ error: "Envoi impossible." }, { status: 500 });
  }
}