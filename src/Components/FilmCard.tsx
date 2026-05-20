export interface FilmCardProps {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (id: string) => void;
}

function FilmCard(film: FilmCardProps) {
    return (
        <div>
            <h2>{film.title}</h2>
            <p>{film.year}</p>
            <p>{film.genre}</p>
            <p>{film.rating}</p>
            <p>{film.watched}</p>
            <button onClick={() => film.onToggleWatched(film.id)}>Změnit stav shlédnutí</button>
            {film.watched === true ? <div>Zhlédnuto✅</div> : null}
        </div>
    );
}

export default FilmCard;