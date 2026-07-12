import {
  BrainCircuit,
  Headphones,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";

const features = [
  {
    title: "Arquitectura escalable",
    description:
      "Diseñamos aplicaciones preparadas para aumentar usuarios, procesos y funcionalidades sin perder rendimiento.",
    icon: ShieldCheck,
  },
  {
    title: "Tecnología moderna",
    description:
      "Aplicamos herramientas actuales, buenas prácticas y arquitecturas mantenibles para cada solución.",
    icon: Rocket,
  },
  {
    title: "Automatización e IA",
    description:
      "Integramos inteligencia artificial y automatizaciones para reducir tareas repetitivas y mejorar resultados.",
    icon: BrainCircuit,
  },
  {
    title: "Acompañamiento continuo",
    description:
      "Seguimos presentes después de la entrega para optimizar, mantener y hacer crecer cada producto.",
    icon: Headphones,
  },
];

const stats = [
  {
    value: "100%",
    label: "Soluciones personalizadas",
    description: "Cada proyecto responde a necesidades reales del negocio.",
  },
  {
    value: "360°",
    label: "Visión integral",
    description: "Desarrollo, calidad, integración y soporte en un solo equipo.",
  },
  {
    value: "24/7",
    label: "Productos disponibles",
    description: "Arquitecturas diseñadas para operar de manera estable.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="¿Por qué Aetherix?"
            title="Construimos tecnología con visión de negocio"
            description="No nos limitamos a programar funcionalidades. Analizamos objetivos, procesos y oportunidades para crear productos que generen valor."
          />

          <Badge>Ingeniería enfocada en resultados</Badge>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}