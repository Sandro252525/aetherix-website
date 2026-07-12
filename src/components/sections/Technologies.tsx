import {
  Bot,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Server,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const technologies = [
  {
    name: "Next.js",
    category: "Frontend",
    icon: Globe2,
  },
  {
    name: "React",
    category: "Frontend",
    icon: Code2,
  },
  {
    name: "TypeScript",
    category: "Lenguaje",
    icon: Boxes,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
  },
  {
    name: "PostgreSQL",
    category: "Base de datos",
    icon: Database,
  },
  {
    name: "Inteligencia Artificial",
    category: "Automatización",
    icon: Bot,
  },
  {
    name: "Cloud",
    category: "Infraestructura",
    icon: Cloud,
  },
  {
    name: "Git & GitHub",
    category: "Control de versiones",
    icon: GitBranch,
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="bg-slate-950 py-24">
      <Container>
        <SectionTitle
          centered
          eyebrow="Tecnologías"
          title="Herramientas modernas para soluciones de alto rendimiento"
          description="Seleccionamos tecnologías confiables, escalables y preparadas para construir productos digitales sólidos."
          theme="dark"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {technology.name}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {technology.category}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/15 to-white/5 p-8 text-center sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Tecnología con propósito
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            No elegimos herramientas por moda sino por el valor que aportan a
            cada proyecto
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Analizamos cada necesidad para definir una arquitectura segura,
            mantenible y preparada para crecer.
          </p>
        </div>
      </Container>
    </section>
  );
}