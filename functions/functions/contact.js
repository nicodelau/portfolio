export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Faltan campos requeridos' }), { status: 400 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Portfolio <noreply@tudominio.com>",
        to: env.PUBLIC_GMAIL_USER,
        subject: `Nuevo mensaje de ${name}`,
        text: `Email: ${email}\n\n${message}`,
      }),
    });

    return new Response(JSON.stringify({ ok: res.ok }), { status: res.ok ? 200 : 500 });

  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500 });
  }
}
