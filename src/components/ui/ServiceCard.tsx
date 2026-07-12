import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href = "#contact",
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={29} strokeWidth={2.1} />
      </div>

      <h3 className="mt-7 text-2xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <a
        href={href}
        className="mt-7 inline-flex items-center gap-2 font-bold text-blue-600 transition-all duration-300 group-hover:gap-3"
      >
        Conocer más
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}