import AccordionItem from "@/components/ui/AccordionItem";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const questions = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "Depende del alcance y la complejidad. Una página corporativa puede tomar entre una y tres semanas, mientras que una plataforma empresarial puede requerir varias etapas de desarrollo.",
  },
  {
    question: "¿Trabajan con empresas fuera de Perú?",
    answer:
      "Sí. Nuestra modalidad de trabajo permite gestionar proyectos de forma remota con clientes de diferentes países, manteniendo comunicación y entregas organizadas.",
  },
  {
    question: "¿Pueden mejorar un sistema que ya está desarrollado?",
    answer:
      "Sí. Podemos revisar la arquitectura, experiencia de usuario, rendimiento, seguridad, integraciones y calidad del sistema antes de proponer mejoras.",
  },
  {
    question: "¿El desarrollo incluye soporte después de la entrega?",
    answer:
      "Podemos incluir un periodo de acompañamiento posterior y también planes de mantenimiento, monitoreo, soporte y evolución continua.",
  },
  {
    question: "¿Cómo realizan los pagos de un proyecto?",
    answer:
      "Los pagos se organizan por etapas y entregables. La distribución exacta se define en la propuesta comercial según el tamaño y duración del proyecto.",
  },
  {
    question: "¿Entregan el código fuente y la documentación?",
    answer:
      "Sí. Según el servicio contratado, entregamos el código fuente, instrucciones de ejecución, documentación funcional y los accesos correspondientes.",
  },
];

export default function Faq() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas antes de comenzar"
              description="Conoce cómo trabajamos, qué incluye el servicio y qué puedes esperar durante el desarrollo de tu proyecto."
            />

            <Badge className="mt-8">
              Información clara desde el inicio
            </Badge>

            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                ¿Tienes otra consulta?
              </p>

              <h3 className="mt-4 text-2xl font-extrabold">
                Podemos revisar tu caso directamente
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Cuéntanos sobre tu proyecto y te ayudaremos a definir el mejor
                camino para desarrollarlo.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Realizar una consulta
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}