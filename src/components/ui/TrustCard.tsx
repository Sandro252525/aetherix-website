import type { LucideIcon } from "lucide-react";

interface TrustCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
}

export default function TrustCard({
  title,
  description,
  icon: Icon,
  number,
}: TrustCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-start justify-between gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={28} strokeWidth={2.1} />
        </div>

        <span className="text-sm font-extrabold text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-2xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}