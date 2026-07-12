import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Conoce cómo Aetherix recopila, utiliza y protege la información enviada mediante su sitio web.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Volver al inicio">
            <Logo />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>
        </Container>
      </header>

      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ShieldCheck size={28} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            Información legal
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Política de privacidad
          </h1>

          <p className="mt-5 text-slate-500">
            Última actualización: julio de 2026
          </p>

          <div className="mt-12 space-y-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Información que recopilamos
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Podemos recopilar la información que el visitante proporciona
                voluntariamente mediante formularios de contacto, como nombre,
                correo electrónico, empresa, servicio solicitado y descripción
                del proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Uso de la información
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                La información enviada se utilizará para responder consultas,
                analizar solicitudes, preparar propuestas y mantener la
                comunicación relacionada con los servicios de Aetherix.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Protección de datos
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Aplicamos medidas razonables para proteger la información
                recibida contra accesos, usos o divulgaciones no autorizadas.
                No vendemos ni comercializamos los datos personales de los
                visitantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Servicios externos
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                El sitio puede utilizar servicios externos de alojamiento,
                analítica, mensajería o formularios. Estos proveedores pueden
                procesar determinada información conforme a sus propias
                políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Derechos del usuario
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                El usuario puede solicitar información, actualización,
                corrección o eliminación de los datos personales que haya
                proporcionado, cuando corresponda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Contacto
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Para consultas relacionadas con esta política puedes escribir a{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}