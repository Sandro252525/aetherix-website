export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-16 px-6 py-20 lg:flex-row lg:items-center">

        {/* Texto */}

        <div className="max-w-2xl">

          <p className="mb-4 text-blue-600 font-semibold uppercase tracking-widest">
            Building the Future
          </p>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">
            Transformamos ideas
            <br />
            en software
            <span className="text-blue-600"> extraordinario.</span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Creamos aplicaciones web, plataformas empresariales,
            inteligencia artificial y soluciones tecnológicas
            para empresas que quieren crecer.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Comenzar proyecto
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Ver portafolio
            </button>

          </div>

        </div>

        {/* Imagen */}

        <div className="flex justify-center">

          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-slate-900 text-8xl text-white shadow-2xl">

            A

          </div>

        </div>

      </div>
    </section>
  );
}