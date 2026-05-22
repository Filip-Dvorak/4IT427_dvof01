import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import AddFilmPage from './pages/AddFilmPage'
import WatchlistPage from './pages/WatchlistPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.35em] text-red-500">Film Watchlist</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Watchlist</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Spravuj svou knihovnu filmů v temném, klasickém streamovacím stylu.
          </p>

          <nav className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)]'
                    : 'border border-white/10 bg-slate-900/80 text-slate-200 hover:border-red-500 hover:text-white'
                }`
              }
            >
              Můj watchlist
            </NavLink>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)]'
                    : 'border border-white/10 bg-slate-900/80 text-slate-200 hover:border-red-500 hover:text-white'
                }`
              }
            >
              Přidat film
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<WatchlistPage />} />
          <Route path="/form" element={<AddFilmPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
