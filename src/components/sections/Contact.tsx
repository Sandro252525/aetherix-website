"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

interface ContactApiResponse {
  success?: boolean;
  message?: string;
}

export default function Contact() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const phoneNumber = siteConfig.phone.replace(/\D/g, "");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        throw new Error(
          result.message ?? "No fue posible enviar la solicitud.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado.",
      );
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Contacto"
              title="Convirtamos tu idea en un producto digital"
              description="Cuéntanos qué necesitas y prepararemos una propuesta orientada a tus objetivos, tiempos y presupuesto."
            />

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-500">Correo</p>
                  <p className="break-all font-semibold text-slate-950">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:+${phoneNumber}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <p className="font-semibold text-slate-950">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Ubicación</p>
                  <p className="font-semibold text-slate-950">
                    {siteConfig.location} · Atención remota internacional
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-blue-400" size={24} />

                <p className="font-bold">
                  Respuesta rápida y atención personalizada
                </p>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                Analizamos cada solicitud para ofrecer una solución realista,
                escalable y alineada con el negocio.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-10">
            {status === "success" ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="mt-7 text-3xl font-extrabold text-slate-950">
                  Solicitud enviada
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-600">
                  Gracias por contactarnos. La información fue enviada
                  correctamente a Aetherix y será revisada lo antes posible.
                </p>

                <Button
                  className="mt-8"
                  variant="secondary"
                  onClick={() => setStatus("idle")}
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-extrabold text-slate-950">
                  Cuéntanos sobre tu proyecto
                </h3>

                <p className="mt-3 text-slate-600">
                  Completa el formulario y nos pondremos en contacto contigo.
                </p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Nombre
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        autoComplete="name"
                        placeholder="Tu nombre"
                        disabled={status === "loading"}
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Empresa
                      </label>

                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={150}
                        autoComplete="organization"
                        placeholder="Nombre de tu empresa"
                        disabled={status === "loading"}
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Correo electrónico
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="correo@empresa.com"
                      disabled={status === "loading"}
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Servicio requerido
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      disabled={status === "loading"}
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>

                      <option value="web">Desarrollo web</option>
                      <option value="system">Sistema empresarial</option>
                      <option value="ai">Inteligencia artificial</option>
                      <option value="integration">Integraciones API</option>
                      <option value="qa">QA y Performance</option>
                      <option value="cloud">Cloud y DevOps</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Descripción del proyecto
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      maxLength={3000}
                      placeholder="Cuéntanos qué necesitas desarrollar..."
                      disabled={status === "loading"}
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700"
                    >
                      <AlertCircle size={21} className="mt-0.5 shrink-0" />

                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <LoaderCircle size={20} className="animate-spin" />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <ArrowRight size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}