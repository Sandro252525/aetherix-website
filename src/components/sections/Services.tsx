import {
  Bot,
  CloudCog,
  Code2,
  Gauge,
  Network,
  PanelsTopLeft,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Desarrollo web",
    description:
      "Creamos sitios corporativos, plataformas y aplicaciones modernas, rápidas y adaptadas a cualquier dispositivo.",
    icon: PanelsTopLeft,
  },
  {
    title: "Sistemas empresariales",
    description:
      "Desarrollamos soluciones a medida para optimizar ventas, operaciones, clientes y procesos internos.",
    icon: Code2,
  },
  {
    title: "Inteligencia artificial",
    description:
      "Integramos asistentes inteligentes, automatizaciones y herramientas de IA orientadas a resultados.",
    icon: Bot,
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos CRM, pagos, mensajería, calendarios, servicios cloud y plataformas de terceros.",
    icon: Network,
  },
  {
    title: "QA y performance",
    description:
      "Validamos funcionalidad, experiencia, estabilidad y rendimiento para entregar productos confiables.",
    icon: Gauge,
  },
  {
    title: "Cloud y DevOps",
    description:
      "Preparamos aplicaciones escalables mediante despliegues estables, monitoreo y procesos automatizados.",
    icon: CloudCog,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Soluciones digitales para impulsar tu crecimiento"
            description="Combinamos desarrollo, automatización, calidad e integración para construir productos digitales completos y preparados para evolucionar."
          />

          <Badge variant="neutral">
            Tecnología de principio a fin
          </Badge>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                Soluciones personalizadas
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                ¿Necesitas una solución que no aparece en la lista?
              </h3>

              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Analizamos tu necesidad y diseñamos una propuesta tecnológica
                adaptada a tus procesos, objetivos y presupuesto.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Conversemos sobre tu proyecto
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}