import {
  BadgeCheck,
  ClipboardCheck,
  MessagesSquare,
  RefreshCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TrustCard from "@/components/ui/TrustCard";

const principles = [
  {
    title: "Comunicación transparente",
    description:
      "Mantenemos visibilidad sobre avances, decisiones, riesgos y próximos pasos durante todo el proyecto.",
    icon: MessagesSquare,
    number: "01",
  },
  {
    title: "Entregas verificables",
    description:
      "Cada funcionalidad se revisa y valida antes de avanzar para reducir errores y retrabajos.",
    icon: ClipboardCheck,
    number: "02",
  },
  {
    title: "Calidad desde el inicio",
    description:
      "Aplicamos criterios de seguridad, rendimiento, accesibilidad y mantenibilidad desde la arquitectura.",
    icon: ShieldCheck,
    number: "03",
  },
  {
    title: "Procesos organizados",
    description:
      "Trabajamos con objetivos, tareas, control de versiones y entregas incrementales claramente definidas.",
    icon: Workflow,
    number: "04",
  },
  {
    title: "Mejora continua",
    description:
      "Analizamos el comportamiento del producto para identificar oportunidades de evolución y optimización.",
    icon: RefreshCcw,
    number: "05",
  },
  {
    title: "Compromiso con el resultado",
    description:
      "Cada decisión técnica busca aportar valor real al negocio y a las personas que utilizarán la solución.",
    icon: BadgeCheck,
    number: "06",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Nuestra forma de trabajar"
            title="Confianza construida durante todo el proyecto"
            description="Una buena experiencia no depende únicamente del resultado final. También depende de una comunicación clara, entregas controladas y decisiones bien fundamentadas."
          />

          <Badge variant="success">
            Calidad y transparencia
          </Badge>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <TrustCard
              key={principle.title}
              title={principle.title}
              description={principle.description}
              icon={principle.icon}
              number={principle.number}
            />
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-blue-600">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
                Una relación a largo plazo
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                No buscamos entregar código y desaparecer
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-blue-100">
                Buscamos comprender el negocio, acompañar la evolución del
                producto y convertirnos en un aliado tecnológico confiable.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Trabajemos juntos
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}