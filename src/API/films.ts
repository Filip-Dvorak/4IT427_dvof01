import type { Film } from "@/Types/film.types"

export async function fetchFilms(): Promise<Film[]> {
  return fetch('Public/films.json').then((r) => r.json() as Promise<Film[]>);
}