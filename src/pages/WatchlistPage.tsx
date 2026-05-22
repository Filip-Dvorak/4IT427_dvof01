import { Link } from 'react-router-dom'
import FilmCard from '../Components/FilmCard'
import useWatchlist from '../Hooks/useWatchilist'

function WatchlistPage() {
  const { films, toggleWatched, markAllAsWatched, isLoading, isError, error, refetch } = useWatchlist()

  const errorMessage = error instanceof Error ? error.message : 'Nastala neznámá chyba.'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.35em] text-red-500">Film Watchlist</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Watchlist</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Zde najdeš svůj seznam filmů. Označ filmy jako zhlédnuté nebo je odeber.
          </p>
          <button
            className="mt-6 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            onClick={() => markAllAsWatched()}
          >
            Označit vše jako zhlédnuté
          </button>
        </header>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_360px]">
          <section className="grid gap-6 sm:grid-cols-1 xl:grid-cols-[minmax(0,2fr)]">
            {isLoading ? (
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-12 text-center text-lg text-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                Načítám…
              </div>
            ) : isError ? (
              <div className="rounded-[2rem] border border-rose-500/30 bg-slate-900/85 p-12 text-center text-lg text-slate-200 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                <p className="mb-4 text-red-400">Nepodařilo se načíst filmy.</p>
                <p className="mb-6 text-sm text-slate-400">{errorMessage}</p>
                <button
                  className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                  onClick={() => refetch()}
                >
                  Zkusit znovu
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {films.map((film) => (
                  <FilmCard
                    key={film.id}
                    {...film}
                    onToggleWatched={() => toggleWatched(film.id)}
                  />
                ))}
              </div>
            )}
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-slate-200">
              <span className="text-xs uppercase tracking-[0.35em] text-red-500">Přidat nový film</span>
              <p className="mt-3 text-sm text-slate-400">
                Použij stránku pro přidání filmu, aby se nový film automaticky objevil ve watchlistu.
              </p>
            </div>
            <Link
              to="/form"
              className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Přejít na formulář
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default WatchlistPage
