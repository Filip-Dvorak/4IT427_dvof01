import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { WatchlistProvider } from './Context/WatchListContext.tsx'
import type { Film } from './Types/film.types'

const initialFilms: Film[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    rating: 12,
    watched: true,
  },
  {
    id: '2',
    title: 'Spirited Away',
    year: 2001,
    genre: 'Animation',
    rating: 8.6,
    watched: false,
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    watched: false,
  },
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WatchlistProvider initialFilms={initialFilms}>
      <App />
    </WatchlistProvider>
  </StrictMode>,
)
