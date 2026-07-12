"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-6"
        aria-label="Navegación principal"
      >
        <div className="flex h-20 items-center justify-between">
          <a href="#" onClick={closeMenu} aria-label="Ir al inicio">
            <Logo />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-medium text-slate-700 transition duration-300 hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact">Solicitar cotización</Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 lg:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-200 py-6 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              className="mt-5 w-full"
              onClick={closeMenu}
            >
              Solicitar cotización
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}