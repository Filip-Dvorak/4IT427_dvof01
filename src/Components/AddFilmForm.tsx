import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useWatchlist from '../Hooks/useWatchilist'
import type { Film } from '../Types/film.types'

const filmSchema = z.object({
  title: z.string().min(1, 'Název je povinný'),
  year: z
    .number('Rok musí být číslo')
    .int('Rok musí být celé číslo')
    .min(1900, 'Rok musí být 1900 nebo pozdější')
    .max(new Date().getFullYear(), `Rok nesmí být větší než ${new Date().getFullYear()}`),
  genre: z.string().min(1, 'Žánr je povinný'),
  rating: z
    .number('Hodnocení musí být číslo')
    .min(1, 'Hodnocení musí být minimálně 1')
    .max(10, 'Hodnocení musí být maximálně 10'),
})

type FilmFormValues = z.infer<typeof filmSchema>

const AddFilmForm = () => {
  const { addFilm } = useWatchlist()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilmFormValues>({
    resolver: zodResolver(filmSchema),
    defaultValues: {
      title: '',
      year: new Date().getFullYear(),
      genre: '',
      rating: 5,
    },
  })

  const onSubmit = (values: FilmFormValues) => {
    addFilm({
      ...values,
      id: crypto.randomUUID(),
      watched: false,
    } as Film)

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-200">Název filmu</label>
        <input
          {...register('title')}
          placeholder="Název filmu"
          className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        />
        {errors.title ? <p className="text-xs text-red-400">{errors.title.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-200">Rok</label>
        <select
          {...register('year', { valueAsNumber: true })}
          className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        >
          {Array.from({ length: 200 }, (_, i) => new Date().getFullYear() - i).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {errors.year ? <p className="text-xs text-red-400">{errors.year.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-200">Žánr</label>
        <input
          {...register('genre')}
          placeholder="Žánr"
          className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        />
        {errors.genre ? <p className="text-xs text-red-400">{errors.genre.message}</p> : null}
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-200">Hodnocení (1-10)</label>
        <input
          {...register('rating', { valueAsNumber: true })}
          type="number"
          min="1"
          max="10"
          step="0.1"
          className="rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        />
        {errors.rating ? <p className="text-xs text-red-400">{errors.rating.message}</p> : null}
      </div>

      <button
        type="submit"
        className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
      >
        Přidat film
      </button>
    </form>
  )
}

export default AddFilmForm
