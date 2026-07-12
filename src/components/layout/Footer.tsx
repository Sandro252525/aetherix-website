import {
  Code2,
  Link,
  Mail,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

const services = [
  "Desarrollo web",
  "Sistemas empresariales",
  "Inteligencia artificial",
  "Integraciones API",
  "QA & Performance",
  "Cloud & DevOps",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="[&_p]:text-white [&_p:last-child]:text-slate-400" />

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Creamos soluciones digitales modernas para empresas que buscan
              innovar, optimizar sus procesos y crecer.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Portafolio de código"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Code2 size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Link size={20} />
              </a>

              <a
                href="mailto:contact@aetherix.dev"
                aria-label="Correo"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Mail size={20} />
              </a>

              <a
                href="#contact"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navegación
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Servicios
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-slate-400">
              <p>contact@aetherix.dev</p>
              <p>+51 999 999 999</p>
              <p>Perú</p>
              <p>Atención remota internacional</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Aetherix. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>

            <a href="#" className="transition hover:text-white">
              Términos
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}