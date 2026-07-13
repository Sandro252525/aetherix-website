import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Todos los campos obligatorios deben completarse.",
        },
        {
          status: 400,
        },
      );
    }

    const { error } = await resend.emails.send({
      from: "Aetherix <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Nueva solicitud de ${name}`,
      html: `
        <h2>Nueva solicitud desde Aetherix</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <hr />
        <p>${message}</p>
      `,
    });

    if (error) {
  console.error("Error de Resend:", error);

  return NextResponse.json(
    {
      success: false,
      message:
        error.message ??
        "Resend rechazó el envío. Revisa la API key y el destinatario.",
    },
    {
      status: 502,
    },
  );
}

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Error en /api/contact:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error al enviar la solicitud.",
      },
      {
        status: 500,
      },
    );
  }
}