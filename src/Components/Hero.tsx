export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[128px]"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          El futuro de los viajes ya está aquí
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
          Explora el mundo a tu <br className="hidden md:inline" /> propio ritmo e inteligencia.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Rutas inteligentes diseñadas por expertos y optimizadas con inteligencia artificial para tus lugares favoritos. Sin perder tiempo, sin perderte nada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#caracteristicas" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5 text-center">
            Empezar mi Ruta Gratis
          </a>
          <a href="#tecnologias" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all duration-200 text-center">
            Ver Tecnologías ⚡
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </header>
  );
}