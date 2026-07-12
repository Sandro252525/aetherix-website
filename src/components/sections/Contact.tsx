"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
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
                href="mailto:contact@aetherix.dev"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Correo</p>
                  <p className="font-semibold text-slate-950">
                    contact@aetherix.dev
                  </p>
                </div>
              </a>

              <a
                href="tel:+51999999999"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Teléfono</p>
                  <p className="font-semibold text-slate-950">
                    +51 999 999 999
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Ubicación</p>
                  <p className="font-semibold text-slate-950">
                    Perú · Atención remota internacional
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
            {isSubmitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="mt-7 text-3xl font-extrabold text-slate-950">
                  Solicitud recibida
                </h3>

                <p className="mt-4 max-w-md leading-7 text-slate-600">
                  Gracias por contactarnos. Revisaremos la información y nos
                  comunicaremos contigo próximamente.
                </p>

                <Button
                  className="mt-8"
                  variant="secondary"
                  onClick={() => setIsSubmitted(false)}
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
                        placeholder="Tu nombre"
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                        placeholder="Nombre de tu empresa"
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                      placeholder="correo@empresa.com"
                      className="h-12 w-full rounded-xl border border-slate-300 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                      placeholder="Cuéntanos qué necesitas desarrollar..."
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                  >
                    Enviar solicitud
                    <ArrowRight size={20} />
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