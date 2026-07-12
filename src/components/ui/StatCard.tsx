interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  theme?: "light" | "dark";
}

export default function StatCard({
  value,
  label,
  description,
  theme = "light",
}: StatCardProps) {
  const isDark = theme === "dark";

  return (
    <article
      className={`rounded-3xl border p-7 ${
        isDark
          ? "border-white/10 bg-white/5"
          : "border-slate-200 bg-white"
      }`}
    >
      <p
        className={`text-4xl font-extrabold ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {value}
      </p>

      <p
        className={`mt-3 font-bold ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {label}
      </p>

      {description && (
        <p
          className={`mt-3 text-sm leading-6 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </article>
  );
}