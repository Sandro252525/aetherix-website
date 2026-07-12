"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const benefits = [
  "Desarrollo a medida",
  "Arquitectura escalable",
  "Calidad garantizada",
];

const chartValues = [38, 52, 46, 68, 61, 82, 74, 96];

const entranceTransition = {
  duration: 0.75,
  ease: "easeOut" as const,
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Fondo tecnológico */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,0.12),transparent_25%),radial-gradient(circle_at_60%_85%,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[130px]" />

      <Container>
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entranceTransition}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur"
            >
              <Sparkles size={16} />
              {siteConfig.slogan}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entranceTransition, delay: 0.12 }}
              className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl"
            >
              Transformamos ideas en
              <span className="relative mt-2 block text-blue-600">
                productos digitales
                <span className="absolute -bottom-2 left-0 h-2 w-2/3 rounded-full bg-blue-100" />
              </span>
              que impulsan negocios.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entranceTransition, delay: 0.22 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              Diseñamos y desarrollamos plataformas web, sistemas
              empresariales, automatizaciones e inteligencia artificial para
              empresas que quieren crecer con tecnología.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entranceTransition, delay: 0.32 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="#contact" size="lg" className="gap-2">
                Iniciar proyecto
                <ArrowRight size={20} />
              </Button>

              <Button href="#portfolio" variant="secondary" size="lg">
                Ver casos de éxito
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entranceTransition, delay: 0.42 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-7"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-blue-600"
                  />
                  {benefit}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-200 pt-8"
            >
              <div>
                <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  100%
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Soluciones personalizadas
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  99.9%
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Disponibilidad esperada
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                  360°
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  Visión tecnológica integral
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard flotante */}
          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-blue-400/25 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-slate-400/25 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-3 shadow-[0_35px_90px_-25px_rgba(15,23,42,0.65)]">
                {/* Barra superior */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  <p className="text-xs font-semibold tracking-wide text-slate-400">
                    AETHERIX PLATFORM
                  </p>

                  <div className="h-7 w-7 rounded-lg bg-blue-600" />
                </div>

                <div className="rounded-b-[1.55rem] bg-slate-50 p-5 sm:p-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Panel de crecimiento
                      </p>

                      <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
                        Visión general
                      </h2>
                    </div>

                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700">
                      <Activity size={15} />
                      Sistema operativo
                    </div>
                  </div>

                  {/* Métricas */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-blue-600 p-5 text-white">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-blue-100">
                          Proyectos activos
                        </p>

                        <TrendingUp size={20} />
                      </div>

                      <p className="mt-4 text-4xl font-extrabold">18</p>
                      <p className="mt-2 text-sm text-blue-100">
                        +24% este mes
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-500">
                          Clientes activos
                        </p>

                        <Users size={20} className="text-blue-600" />
                      </div>

                      <p className="mt-4 text-4xl font-extrabold text-slate-950">
                        42
                      </p>
                      <p className="mt-2 text-sm text-emerald-600">
                        +8 nuevas cuentas
                      </p>
                    </div>
                  </div>

                  {/* Gráfico */}
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-950">
                          Rendimiento mensual
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Evolución de los últimos periodos
                        </p>
                      </div>

                      <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                        +18.4%
                      </span>
                    </div>

                    <div className="mt-7 flex h-40 items-end gap-2 sm:gap-3">
                      {chartValues.map((height, index) => (
                        <motion.div
                          key={`${height}-${index}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.7,
                            delay: 0.55 + index * 0.07,
                          }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-700 to-blue-400"
                        />
                      ))}
                    </div>

                    <div className="mt-3 flex justify-between text-[10px] font-semibold text-slate-400 sm:text-xs">
                      <span>Ene</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Abr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta flotante izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.75 }}
              className="absolute -bottom-7 -left-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-left-8"
            >
              <p className="text-xs font-medium text-slate-500">
                Disponibilidad
              </p>
              <p className="mt-1 text-2xl font-extrabold text-slate-950">
                99.9%
              </p>
            </motion.div>

            {/* Tarjeta flotante derecha */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.9 }}
              className="absolute -right-2 top-24 hidden rounded-2xl border border-blue-200 bg-blue-600 px-5 py-4 text-white shadow-xl sm:block"
            >
              <p className="text-xs font-medium text-blue-100">
                Eficiencia
              </p>
              <p className="mt-1 text-2xl font-extrabold">+32%</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}