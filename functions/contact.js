export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'JSON inválido' }), { status: 400 });
  }

  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: 'Faltan campos requeridos' }), { status: 400 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Portfolio <${env.name}>`,
      to: env.PUBLIC_GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `${message}`,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    return new Response(JSON.stringify({ ok: false, error: err }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
