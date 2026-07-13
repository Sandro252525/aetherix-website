import { NextResponse } from "next/server";
import { Resend } from "resend";

import ContactEmail from "@/emails/ContactEmail";

interface ContactRequest {
  name?: string;
  company?: string;
  email?: string;
  service?: string;
  message?: string;
}

const serviceLabels: Record<string, string> = {
  web: "Desarrollo web",
  system: "Sistema empresarial",
  ai: "Inteligencia artificial",
  integration: "Integraciones API",
  qa: "QA y Performance",
  cloud: "Cloud y DevOps",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const name = body.name?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Completa todos los campos obligatorios.",
        },
        {
          status: 400,
        },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Ingresa un correo electrónico válido.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      name.length > 100 ||
      company.length > 150 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Uno de los campos supera el límite permitido.",
        },
        {
          status: 400,
        },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Faltan variables de entorno de Resend.");

      return NextResponse.json(
        {
          success: false,
          message: "El servicio de contacto no está configurado.",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(apiKey);
    const serviceName = serviceLabels[service] ?? service;

    const submittedAt = new Intl.DateTimeFormat("es-PE", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/Lima",
    }).format(new Date());

    const { error } = await resend.emails.send({
      from: "Aetherix <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: `Nueva oportunidad comercial | ${name}`,
      react: ContactEmail({
        name,
        company,
        email,
        service: serviceName,
        message,
        submittedAt,
      }),
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        {
          success: false,
          message:
            error.message ??
            "No fue posible enviar la solicitud.",
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