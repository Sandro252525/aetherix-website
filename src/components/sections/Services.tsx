import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios y plataformas rápidas, modernas y adaptadas a cualquier dispositivo.",
    number: "01",
  },
  {
    title: "Sistemas Empresariales",
    description:
      "Desarrollamos soluciones a medida para optimizar operaciones, ventas y procesos internos.",
    number: "02",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integramos asistentes, automatizaciones y herramientas inteligentes orientadas al negocio.",
    number: "03",
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos CRM, pagos, mensajería, calendarios y plataformas de terceros.",
    number: "04",
  },
  {
    title: "QA & Performance",
    description:
      "Validamos funcionalidad, calidad y rendimiento para entregar productos confiables.",
    number: "05",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Preparamos aplicaciones escalables con despliegues estables y procesos automatizados.",
    number: "06",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Tecnología diseñada para hacer crecer tu empresa"
          description="Combinamos desarrollo, automatización, calidad e integración para construir soluciones digitales completas."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-extrabold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {service.number}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex font-semibold text-blue-600 transition group-hover:translate-x-1"
              >
                Conocer más →
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}