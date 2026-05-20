import FilmCard, { type FilmCardProps } from './Components/FilmCard'

function dummyToggle(id: string) {
  console.log(`dummy call ${id}`);
}

const films: FilmCardProps[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    rating: 12,
    watched: true,
    onToggleWatched: dummyToggle,
  },
  {
    id: '2',
    title: 'Spirited Away',
    year: 2001,
    genre: 'Animation',
    rating: 8.6,
    watched: false,
    onToggleWatched: dummyToggle,
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    watched: false,
    onToggleWatched: dummyToggle,
  }
]

function App() {
  return (
    <>
      {films.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </>
  )
}

export default App
