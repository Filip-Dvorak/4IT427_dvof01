import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Film } from '../Types/film.types'

interface WatchlistContextType {
  films: Film[]
  addFilm: (film: Film) => void
  removeFilm: (id: string) => void
  toggleWatched: (id: string) => void
  markAllAsWatched: () => void
}

type WatchlistProviderProps = {
  children: ReactNode
  initialFilms?: Film[]
}

export const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined)

export function WatchlistProvider({ children, initialFilms = [] }: WatchlistProviderProps) {
  const [films, setFilms] = useState<Film[]>(initialFilms)

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length
    document.title = `Watchlist (${watchedCount} / ${films.length} zhlédnuto)`
  }, [films])

  const addFilm = (film: Film) => setFilms((previous) => [...previous, film])

  const removeFilm = (id: string) =>
    setFilms((previous) => previous.filter((film) => film.id !== id))

  const toggleWatched = (id: string) => {
    setFilms((currentFilms) =>
      currentFilms.map((film) =>
        film.id === id ? { ...film, watched: !film.watched } : film
      )
    )
  }

  const markAllAsWatched = () =>
    setFilms((previous) => previous.map((film) => ({ ...film, watched: true })))

  const value = useMemo(
    () => ({ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }),
    [films]
  )

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>
}
