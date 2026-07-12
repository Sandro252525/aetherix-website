import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Consulta las condiciones generales de uso del sitio web de Aetherix.",
};

export default function TermsPage() {
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
            <FileText size={28} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            Información legal
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Términos y condiciones
          </h1>

          <p className="mt-5 text-slate-500">
            Última actualización: julio de 2026
          </p>

          <div className="mt-12 space-y-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                1. Uso del sitio
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                El sitio de Aetherix ofrece información general sobre servicios
                de desarrollo de software, automatización, inteligencia
                artificial, integraciones, calidad y consultoría tecnológica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                2. Solicitudes y propuestas
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                El envío de un formulario o mensaje no constituye
                automáticamente una relación contractual. El alcance, precio,
                cronograma, responsabilidades y entregables se establecerán en
                una propuesta o acuerdo independiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                3. Propiedad intelectual
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                El diseño, identidad visual, textos y componentes propios del
                sitio pertenecen a Aetherix, salvo que se indique lo contrario.
                Las tecnologías y librerías utilizadas conservan sus
                respectivas licencias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                4. Contenido referencial
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Los proyectos, indicadores, demostraciones y resultados
                mostrados pueden utilizarse con fines ilustrativos o de
                portafolio. Las condiciones reales dependerán de cada proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                5. Disponibilidad
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Procuramos mantener el sitio disponible y actualizado, pero no
                garantizamos que permanezca libre de interrupciones, errores o
                problemas ocasionados por servicios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                6. Modificaciones
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Aetherix puede actualizar estos términos cuando sea necesario.
                La versión vigente se encontrará publicada en esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                7. Contacto
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Para consultas puedes comunicarte mediante{" "}
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