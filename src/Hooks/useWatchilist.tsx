import type { Film } from "@/Types/film.types"
import { useEffect, useState } from "react"

function useWatchlist(initialFilms: Film[]) {
  const [films, setFilms] = useState(initialFilms)

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`
  }, [films])

  const toggleWatched = (title: string) => {
    setFilms((currentFilms) =>
      currentFilms.map((film) =>
        film.title === title ? { ...film, watched: !film.watched } : film
      )
    )
  }
  const markAllAsWatched = () => {
    setFilms(prev => prev.map(f => ({ ...f, watched: true })))
  }

  return { films, toggleWatched, markAllAsWatched }
}

export default useWatchlist;