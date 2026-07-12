interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({
  showText = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.9),_transparent_55%)]" />

        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          className="relative h-7 w-7"
        >
          <path
            d="M32 8 52 52H42.5L38 41H26L21.5 52H12L32 8Zm0 17.5L28.8 34h6.4L32 25.5Z"
            fill="white"
          />
        </svg>
      </div>

      {showText && (
        <div>
          <p className="text-xl font-extrabold tracking-[0.12em] text-slate-950">
            AETHERIX
          </p>

          <p className="text-xs text-slate-500">
            Building the Future
          </p>
        </div>
      )}
    </div>
  );
}