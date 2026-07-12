import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const stats = [
  { value: "50+", label: "Proyectos desarrollados" },
  { value: "99.9%", label: "Disponibilidad" },
  { value: "24/7", label: "Soporte tecnológico" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_35%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            {siteConfig.slogan}
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Transformamos ideas en
            <span className="block text-blue-600">
              software extraordinario.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Desarrollamos plataformas web, automatizaciones, inteligencia
            artificial y soluciones empresariales preparadas para crecer junto
            con tu negocio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Comenzar proyecto</Button>
            <Button variant="secondary" size="lg">
              Ver portafolio
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 top-16 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />
          <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-slate-300/70 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-slate-950 p-4 shadow-2xl">
            <div className="rounded-2xl bg-white p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Aetherix Platform</p>
                  <h2 className="text-xl font-bold text-slate-950">
                    Panel de crecimiento
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                  A
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-sm font-medium text-blue-700">
                    Proyectos activos
                  </p>
                  <p className="mt-3 text-4xl font-extrabold text-slate-950">
                    18
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    +24% este mes
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm font-medium text-slate-700">
                    Eficiencia
                  </p>
                  <p className="mt-3 text-4xl font-extrabold text-slate-950">
                    96%
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Procesos optimizados
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-semibold text-slate-950">
                    Rendimiento mensual
                  </p>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    +18.4%
                  </span>
                </div>

                <div className="flex h-40 items-end gap-3">
                  {[45, 64, 52, 78, 68, 88, 96].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-blue-600"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
            <p className="text-sm text-slate-500">Disponibilidad</p>
            <p className="text-2xl font-extrabold text-slate-950">99.9%</p>
          </div>
        </div>
      </div>
    </section>
  );
}