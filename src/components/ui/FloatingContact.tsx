"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function FloatingContact() {
  const phoneNumber = siteConfig.phone.replace(/\D/g, "");

  const message = encodeURIComponent(
    "Hola, vi la página de Aetherix y quisiera conversar sobre un proyecto.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Aetherix por WhatsApp"
      title="Contactar por WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: 1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-2xl bg-emerald-500 px-4 py-3 font-bold text-white shadow-2xl transition hover:bg-emerald-600 sm:bottom-8 sm:left-8"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-white/20" />

        <MessageCircle
          size={21}
          strokeWidth={2.3}
          className="relative"
        />
      </span>

      <span className="hidden sm:block">
        Hablemos
      </span>
    </motion.a>
  );
}