import Link from "next/link";
import {
  Code2,
  Globe,
  Mail,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

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
  const phoneNumber = siteConfig.phone.replace(/\D/g, "");

  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="[&_p]:text-white [&_p:last-child]:text-slate-400" />

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Creamos soluciones digitales modernas para empresas que buscan
              innovar, optimizar sus procesos y crecer.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="https://github.com/Sandro252525"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portafolio de código"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Code2 size={20} />
              </a>

              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sitio web"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Globe size={20} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Correo"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Mail size={20} />
              </a>

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Navegación
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={`/${item.href}`}
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Servicios
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/#services"
                    className="text-slate-400 transition hover:text-blue-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em]">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-slate-400">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.location}</p>
              <p>Atención remota internacional</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Aetherix. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacidad
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Términos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}