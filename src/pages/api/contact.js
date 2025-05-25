export const prerender = false;
import nodemailer from 'nodemailer';

export async function POST({ request }) {
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'JSON inválido o vacío' }), { status: 400 });
  }
  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: 'Faltan campos requeridos' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.PUBLIC_GMAIL_USER,
      pass: import.meta.env.PUBLIC_GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Portfolio <${import.meta.env.PUBLIC_GMAIL_USER}>`,
      to: import.meta.env.PUBLIC_GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
}
