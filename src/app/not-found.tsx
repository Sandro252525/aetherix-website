import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />

      <Container className="relative z-10 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Logo className="[&_p]:text-white [&_p:last-child]:text-slate-400" />
          </div>

          <div className="mx-auto mt-14 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-blue-400 backdrop-blur">
            <SearchX size={38} strokeWidth={2} />
          </div>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Error 404
          </p>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Esta página no existe
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            La dirección ingresada puede ser incorrecta, haber cambiado o ya no
            encontrarse disponible.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg" className="gap-2">
              <Home size={20} />
              Volver al inicio
            </Button>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10"
            >
              <ArrowLeft size={20} />
              Contactar con Aetherix
            </Link>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-500">
              Aetherix · Building the Future
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}