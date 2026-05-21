import FilmCard from './Components/FilmCard'
import useWatchlist from './Hooks/useWatchilist'
import type { Film } from './Types/film.types'

const initialFilms:Film[] = [
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
  }
]

function App() {
 const {films, toggleWatched, markAllAsWatched} = useWatchlist(initialFilms)


  return (
    <>
    <button onClick={() => markAllAsWatched()}>Označit vše jako zhlédnuté</button>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          {...film}
          onToggleWatched={() => toggleWatched(film.title)}
        />
      ))}
    </>
  )
}

export default App
