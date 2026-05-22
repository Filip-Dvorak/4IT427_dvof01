import useWatchlist from "@/Hooks/useWatchilist";

export interface FilmCardProps {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (id: string) => void;
}


function isRatingValid(rating: number){
    return rating >= 1 && rating <= 10;
}


function FilmCard(film: FilmCardProps) {
    const {removeFilm} = useWatchlist();
    return (
        <div>
            <h2>{film.title}</h2>
            <p>{film.year}</p>
            <p>{film.genre}</p>
            <p>{film.watched}</p>
            <button onClick={() => film.onToggleWatched(film.id)}>Změnit stav shlédnutí</button>
            <button onClick={() => removeFilm(film.id)}>Odebrat</button>
            {film.watched === true ? <div>Zhlédnuto✅</div> : null}
            {isRatingValid(film.rating) === true ? <p>{film.rating} ⭐</p> : <div>Neplatné hodnocení</div>}
        </div>
    );
}

export default FilmCard;