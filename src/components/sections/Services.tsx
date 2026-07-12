const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos sitios y plataformas rápidas, modernas y adaptadas a cualquier dispositivo.",
    icon: "01",
  },
  {
    title: "Sistemas Empresariales",
    description:
      "Desarrollamos soluciones a medida para optimizar operaciones, ventas y procesos internos.",
    icon: "02",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integramos asistentes, automatizaciones y herramientas inteligentes orientadas al negocio.",
    icon: "03",
  },
  {
    title: "Integraciones API",
    description:
      "Conectamos CRM, pagos, mensajería, calendarios y plataformas de terceros.",
    icon: "04",
  },
  {
    title: "QA & Performance",
    description:
      "Validamos funcionalidad, calidad y rendimiento para entregar productos confiables.",
    icon: "05",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Preparamos aplicaciones escalables con despliegues estables y procesos automatizados.",
    icon: "06",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Nuestros servicios
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Tecnología diseñada para hacer crecer tu empresa
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Combinamos desarrollo, automatización, calidad e integración para
            construir soluciones digitales completas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-extrabold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {service.icon}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}