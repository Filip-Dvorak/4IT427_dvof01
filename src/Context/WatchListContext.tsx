import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Film } from '../Types/film.types'
import { fetchFilms } from '@/API/films'
import { ClimbingBoxLoader } from 'react-spinners'

interface WatchlistContextType {
  films: Film[]
  addFilm: (film: Film) => void
  removeFilm: (id: string) => void
  toggleWatched: (id: string) => void
  markAllAsWatched: () => void
  isLoading: boolean
  isError: boolean
  error: unknown
  refetch: () => void
}

type WatchlistProviderProps = {
  children: ReactNode
}

export const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined)

export function WatchlistProvider({ children }: WatchlistProviderProps) {
  
  const { data, isLoading, isError, error, refetch } = useQuery<Film[], Error>({
    queryKey: ['films'],
    queryFn: fetchFilms,
    retry: 2,
  })
  
  const [films, setFilms] = useState<Film[]>([])
  useEffect(() => {
    if (data) {
      setFilms(data)
    }
  }, [data])

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
    () => ({
      films,
      addFilm,
      removeFilm,
      toggleWatched,
      markAllAsWatched,
      isLoading,
      isError,
      error,
      refetch: () => void refetch(),
    }),
    [films, isLoading, isError, error, refetch]
  )

  if (isLoading) return <ClimbingBoxLoader />;
  if (isError) return <p>Chyba: {(error as Error).message}</p>;    
  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>
}
