export function Home() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
            
            {/* ========================================== */}
            {/* 🚀 SECCIÓN HERO                            */}
            {/* ========================================== */}
            <header
                className="relative overflow-hidden min-h-screen flex items-center justify-center pt-16"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Efecto de luces de fondo (Glow) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                    <div className="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[128px]"></div>
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[128px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    {/* Tag destacado */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6 backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        El futuro de los viajes ya está aquí
                    </span>

                    {/* Título Principal */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
                        Explora el mundo a tu <br className="hidden md:inline" /> propio ritmo e inteligencia.
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Rutas inteligentes diseñadas por expertos y optimizadas con inteligencia artificial para tus lugares favoritos. Sin perder tiempo, sin perderte nada.
                    </p>

                    {/* Acciones (CTA) */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#caracteristicas" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Empezar mi Ruta Gratis
                        </a>
                        <a href="#tecnologias" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all duration-200 text-center">
                            Ver Tecnologías ⚡
                        </a>
                    </div>
                </div>
                
                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
            </header>

            {/* ========================================== */}
            {/* 🗺️ SECCIÓN CARACTERÍSTICAS                 */}
            {/* ========================================== */}
            <section id="caracteristicas" className="py-24 relative z-20">
                <div className="container mx-auto px-6">
                    
                    {/* Encabezado de la Sección */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
                            Tu viaje, potenciado por la tecnología
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Unimos los mejores destinos del planeta con algoritmos de optimización para ofrecerte una experiencia fluida y sin fricciones.
                        </p>
                    </div>

                    {/* Grid de Características */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        
                        {/* Tarjeta 1: Lugares Favoritos */}
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

                        {/* Tarjeta 2: Rutas Inteligentes */}
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

                        {/* Tarjeta 3: Eco-Tecnología Offline */}
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

        </div>
    );
}