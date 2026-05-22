import AddFilmForm from './Components/AddFilmForm'
import FilmCard from './Components/FilmCard'
import useWatchlist from './Hooks/useWatchilist'

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.35em] text-red-500">Retro movie library</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Watchlist</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Spravuj svou knihovnu filmů v temném, klasickém streamovacím stylu.
          </p>
          <button
            className="mt-6 inline-flex items-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            onClick={() => markAllAsWatched()}
          >
            Označit vše jako zhlédnuté
          </button>
        </header>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_360px]">
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {films.map((film) => (
              <FilmCard
                key={film.id}
                {...film}
                onToggleWatched={() => toggleWatched(film.title)}
              />
            ))}
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="mb-6 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-slate-200">
              <span className="text-xs uppercase tracking-[0.35em] text-red-500">Přidat film</span>
              <p className="mt-3 text-sm text-slate-400">
                Vyplň údaje a přidej film do knihovny.
              </p>
            </div>
            <AddFilmForm />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default App
