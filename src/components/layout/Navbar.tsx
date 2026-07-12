import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg">
            A
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-wide text-slate-900">
              AETHERIX
            </h1>

            <p className="text-xs text-slate-500">
              Building the Future
            </p>
          </div>
        </div>

        {/* Menú */}
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

        {/* Botón */}
        <Button>
          Solicitar Cotización
        </Button>

      </div>
    </nav>
  );
}