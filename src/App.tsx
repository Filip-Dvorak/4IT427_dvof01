import AddFilmForm from './Components/AddFilmForm'
import FilmCard from './Components/FilmCard'
import useWatchlist from './Hooks/useWatchilist'

function App() {
  const { films, toggleWatched, markAllAsWatched } = useWatchlist()

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
      <AddFilmForm/>
    </>
  )
}

export default App
