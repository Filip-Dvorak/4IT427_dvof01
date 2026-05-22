import useWatchlist from '@/Hooks/useWatchilist'

export interface FilmCardProps {
  id: string
  title: string
  year: number
  genre: string
  rating: number
  watched: boolean
  onToggleWatched: (id: string) => void
}

function isRatingValid(rating: number) {
  return rating >= 1 && rating <= 10
}

function FilmCard(film: FilmCardProps) {
  const { removeFilm } = useWatchlist()

  return (
    <article className="card-gradient rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
      <div>
        <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
          <span>{film.genre}</span>
          <span>{film.year}</span>
        </div>

        <h2 className="text-2xl font-semibold text-white">{film.title}</h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          {film.watched ? 'Zhlédnutý ✅' : 'Nezhlédnutý ❌'}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200 flex items-center justify-between">
          <span>Hodnocení</span>
          <span className="font-semibold text-white">{isRatingValid(film.rating) ? `${film.rating} ⭐` : 'Neplatné'}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            className="rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            onClick={() => film.onToggleWatched(film.id)}
          >
            {film.watched ? 'Zrušit zhlédnutí' : 'Označit jako zhlédnuté'}
          </button>
          <button
            className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-red-500 hover:text-red-400"
            onClick={() => removeFilm(film.id)}
          >
            Odebrat
          </button>
        </div>
      </div>
    </article>
  )
}

export default FilmCard;