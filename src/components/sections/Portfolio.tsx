import {
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  ShoppingCart,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    category: "Plataforma empresarial",
    title: "Aetherix CRM",
    description:
      "Sistema para gestionar clientes, oportunidades comerciales, actividades y seguimiento de ventas.",
    result: "+38% de productividad comercial",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    icon: ChartNoAxesCombined,
    featured: true,
  },
  {
    category: "Inteligencia artificial",
    title: "Asistente empresarial con IA",
    description:
      "Asistente inteligente para automatizar consultas, procesos internos y atención al cliente.",
    result: "-45% de tiempo de respuesta",
    technologies: ["IA", "APIs", "Node.js"],
    icon: Bot,
    featured: false,
  },
  {
    category: "Comercio electrónico",
    title: "E-commerce escalable",
    description:
      "Tienda virtual moderna con catálogo, carrito, gestión de pedidos y panel administrativo.",
    result: "+27% de conversiones",
    technologies: ["React", "Next.js", "Cloud"],
    icon: ShoppingCart,
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Portafolio"
            title="Soluciones digitales creadas para generar resultados"
            description="Diseñamos productos enfocados en resolver problemas reales, optimizar procesos y acompañar el crecimiento de cada empresa."
          />

          <Button href="#contact" variant="secondary">
            Quiero un proyecto similar
          </Button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl ${
                  project.featured
                    ? "bg-slate-950 lg:row-span-2"
                    : "bg-slate-50"
                }`}
              >
                <div className="relative z-10 flex h-full flex-col p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        project.featured
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    <span
                      className={`text-sm font-bold ${
                        project.featured
                          ? "text-slate-500"
                          : "text-slate-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <p
                    className={`mt-10 text-sm font-bold uppercase tracking-[0.2em] ${
                      project.featured ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {project.category}
                  </p>

                  <h3
                    className={`mt-4 text-3xl font-extrabold tracking-tight ${
                      project.featured ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-2xl leading-8 ${
                      project.featured
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`mt-8 rounded-2xl border p-5 ${
                      project.featured
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        project.featured
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      Resultado destacado
                    </p>

                    <p
                      className={`mt-2 text-xl font-bold ${
                        project.featured ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {project.result}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          project.featured
                            ? "bg-white/10 text-slate-200"
                            : "bg-slate-200/70 text-slate-700"
                        }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`mt-10 inline-flex items-center gap-2 font-bold transition group-hover:gap-3 ${
                      project.featured ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    Ver caso de estudio
                    <ArrowUpRight size={19} />
                  </a>
                </div>

                {project.featured && (
                  <>
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
                    <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}