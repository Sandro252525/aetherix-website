import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  ShieldCheck,
  Rocket,
  BrainCircuit,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Arquitectura Escalable",
    description:
      "Construimos aplicaciones preparadas para crecer junto con tu negocio.",
    icon: ShieldCheck,
  },
  {
    title: "Tecnología Moderna",
    description:
      "Trabajamos con Next.js, React, TypeScript, APIs y soluciones Cloud.",
    icon: Rocket,
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integramos automatización e IA para optimizar procesos empresariales.",
    icon: BrainCircuit,
  },
  {
    title: "Soporte Continuo",
    description:
      "Acompañamos cada proyecto incluso después de la entrega.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          centered
          eyebrow="¿Por qué elegirnos?"
          title="Más que desarrollo de software"
          description="Creamos soluciones digitales enfocadas en rendimiento, escalabilidad y crecimiento empresarial."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}