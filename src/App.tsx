import Head from './Components/Head';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Fast</h2>
            <p className="text-gray-600">Lightning-fast performance optimized for speed</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Beautiful</h2>
            <p className="text-gray-600">Designed with modern aesthetics and user experience</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <span className="text-white text-xl">✨</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Responsive</h2>
            <p className="text-gray-600">Works perfectly on all devices and screen sizes</p>
          </div>
        </section>
      </main>
    </div>
  )
}