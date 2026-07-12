"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Inicio");

  useEffect(() => {
    const sectionIds = navigation
      .filter((item) => item.href.startsWith("#") && item.href !== "#")
      .map((item) => ({
        label: item.label,
        id: item.href.replace("#", ""),
      }));

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 20);

      if (currentScroll < 300) {
        setActiveSection("Inicio");
        return;
      }

      let currentSection = "Inicio";

      sectionIds.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) {
          return;
        }

        const sectionTop =
          element.getBoundingClientRect().top + window.scrollY - 160;

        if (currentScroll >= sectionTop) {
          currentSection = section.label;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    closeMenu();

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActiveSection("Inicio");
      return;
    }

    const element = document.querySelector(href);

    if (!element) {
      return;
    }

    const navbarHeight = 80;

    const destination =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: destination,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-lg shadow-slate-950/5 backdrop-blur-xl"
          : "border-b border-transparent bg-white/75 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6"
        aria-label="Navegación principal"
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <a
            href="#"
            onClick={(event) => handleNavigation(event, "#")}
            aria-label="Ir al inicio"
            className="shrink-0"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.label;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(event) =>
                      handleNavigation(event, item.href)
                    }
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="active-navigation"
                        className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-blue-600"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              className="gap-2"
              onClick={closeMenu}
            >
              Solicitar cotización
              <ArrowRight size={18} />
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 lg:hidden"
            onClick={() =>
              setIsMenuOpen((currentValue) => !currentValue)
            }
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 top-20 -z-10 bg-slate-950/30 backdrop-blur-sm lg:hidden"
              />

              <motion.div
                id="mobile-navigation"
                initial={{
                  opacity: 0,
                  y: -15,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="absolute left-4 right-4 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl lg:hidden"
              >
                <ul className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const isActive = activeSection === item.label;

                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(event) =>
                            handleNavigation(event, item.href)
                          }
                          aria-current={
                            isActive ? "page" : undefined
                          }
                          className={`flex items-center justify-between rounded-2xl px-4 py-3 font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                          }`}
                        >
                          {item.label}

                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-blue-600" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  href="#contact"
                  className="mt-4 w-full gap-2"
                  onClick={closeMenu}
                >
                  Solicitar cotización
                  <ArrowRight size={18} />
                </Button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}