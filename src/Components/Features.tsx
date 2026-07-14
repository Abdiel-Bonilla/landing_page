export default function Features() {
  return (
    <section id="caracteristicas" className="py-24 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Tu viaje, potenciado por la tecnología
          </h2>
          <p className="text-slate-400 text-lg">
            Unimos los mejores destinos del planeta con algoritmos de optimización para ofrecerte una experiencia fluida y sin fricciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tarjeta 1 */}
          <div className="group bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                📍
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Lugares Favoritos</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Guarda, clasifica y recibe recomendaciones de los spots más top. Desde restaurantes secretos hasta los miradores más espectaculares.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              ⚡ Filtros avanzados por IA
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="group bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                🧭
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Rutas Dinámicas</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Mapas paso a paso eficientes. El sistema calcula automáticamente el tráfico, horarios de apertura y mejores momentos para evitar multitudes.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              ⚡ Cálculo en tiempo real
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="group bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xl mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                📱
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Tecnología Offline</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Sincronización total y alertas meteorológicas. Algoritmos de IA locales que funcionan sin gastar tus datos móviles ni devorar tu batería.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              ⚡ 100% Funcional sin cobertura
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}