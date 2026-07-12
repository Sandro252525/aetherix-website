interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  theme = "light",
}: SectionTitleProps) {
  const titleColor = theme === "dark" ? "text-white" : "text-slate-950";

  const descriptionColor =
    theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-6 text-lg leading-8 ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}