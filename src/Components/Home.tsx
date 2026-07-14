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
                {/* Overlay oscuro para mejorar contraste */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none"></div>
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
                    <h1 className="fade-up text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl mb-6">
                        Explora el mundo a tu <br className="hidden md:inline" /> propio ritmo e inteligencia.
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Rutas inteligentes diseñadas por expertos y optimizadas con inteligencia artificial para tus lugares favoritos. Sin perder tiempo, sin perderte nada.
                    </p>

                    {/* Acciones (CTA) */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#caracteristicas" className="w-full sm:w-auto px-8 py-4 bg-indigo-600/95 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 text-center ring-1 ring-indigo-700/40">
                            Empezar mi Ruta Gratis
                        </a>
                        <a href="#tecnologias" className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold rounded-xl border border-slate-800/60 transition-all duration-200 text-center backdrop-blur-sm">
                            Ver Tecnologías ⚡
                        </a>
                    </div>
                </div>
                
                {/* SVG decorativo inferior */}
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,53.3C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" fill="rgba(7,10,15,0.85)"></path>
                </svg>
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

            {/* ========================================== */}
            {/* 🛠️ SECCIÓN: CÓMO FUNCIONA                    */}
            {/* ========================================== */}
            <section id="como-funciona" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Cómo funciona</h2>
                        <p className="text-slate-400">Tres pasos rápidos para planear tu viaje ideal con nuestra plataforma.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="bg-slate-900/60 rounded-2xl p-6 text-center fade-up">
                            <div className="text-4xl mb-4">🔎</div>
                            <h3 className="font-semibold text-white mb-2">Explora</h3>
                            <p className="text-slate-400">Busca destinos, guarda favoritos y filtra por intereses y presupuesto.</p>
                        </div>
                        <div className="bg-slate-900/60 rounded-2xl p-6 text-center fade-up" style={{animationDelay: '120ms'}}>
                            <div className="text-4xl mb-4">🧭</div>
                            <h3 className="font-semibold text-white mb-2">Organiza</h3>
                            <p className="text-slate-400">Crea rutas optimizadas, añade paradas y personaliza la duración y horarios.</p>
                        </div>
                        <div className="bg-slate-900/60 rounded-2xl p-6 text-center fade-up" style={{animationDelay: '240ms'}}>
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-semibold text-white mb-2">Reserva</h3>
                            <p className="text-slate-400">Reserva servicios y sincroniza todo para usar offline durante tu viaje.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* ❓ SECCIÓN: PREGUNTAS FRECUENTES (FAQ)       */}
            {/* ========================================== */}
            <section id="faq" className="py-12 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <details className="bg-slate-800/50 rounded-lg p-4" open>
                            <summary className="cursor-pointer font-semibold text-white">¿Puedo usar la app sin conexión?</summary>
                            <p className="mt-2 text-slate-300">Sí — las rutas y datos esenciales se sincronizan y permanecen disponibles offline.</p>
                        </details>
                        <details className="bg-slate-800/50 rounded-lg p-4">
                            <summary className="cursor-pointer font-semibold text-white">¿Cómo protege la privacidad mis datos?</summary>
                            <p className="mt-2 text-slate-300">Solo almacenamos lo necesario para tu experiencia; puedes eliminar datos en cualquier momento.</p>
                        </details>
                        <details className="bg-slate-800/50 rounded-lg p-4">
                            <summary className="cursor-pointer font-semibold text-white">¿Ofrecen integración con mapas externos?</summary>
                            <p className="mt-2 text-slate-300">Sí, la plataforma integra múltiples proveedores de mapas para rutas y navegación.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ========================================== */}
            {/* 🦶 FOOTER                                  */}
            {/* ========================================== */}
            <footer className="py-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-white">TuRuta</h3>
                            <p className="text-slate-400 text-sm">Planifica. Explora. Vive.</p>
                        </div>
                        <div className="flex gap-4">
                            <a className="text-slate-300 hover:text-white" href="#">Twitter</a>
                            <a className="text-slate-300 hover:text-white" href="#">Instagram</a>
                            <a className="text-slate-300 hover:text-white" href="#">GitHub</a>
                        </div>
                    </div>
                    <div className="text-center text-slate-500 text-xs mt-6">© {new Date().getFullYear()} TuRuta. Todos los derechos reservados.</div>
                </div>
            </footer>

        </div>
    );
}