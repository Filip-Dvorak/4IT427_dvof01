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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '320px', margin: '20px 0' }}
    >
      <div>
        <input
          {...register('title')}
          placeholder="Název filmu"
        />
        {errors.title ? <p style={{ color: 'red' }}>{errors.title.message}</p> : null}
      </div>

      <div>
        <label>
          Rok:
          <select {...register('year', { valueAsNumber: true })}>
            {Array.from({ length: 200 }, (_, i) => new Date().getFullYear() - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        {errors.year ? <p style={{ color: 'red' }}>{errors.year.message}</p> : null}
      </div>

      <div>
        <input
          {...register('genre')}
          placeholder="Žánr"
        />
        {errors.genre ? <p style={{ color: 'red' }}>{errors.genre.message}</p> : null}
      </div>

      <div>
        <label>
          Hodnocení (1-10):
          <input
            {...register('rating', { valueAsNumber: true })}
            type="number"
            min="1"
            max="10"
            step="0.1"
          />
        </label>
        {errors.rating ? <p style={{ color: 'red' }}>{errors.rating.message}</p> : null}
      </div>

      <button type="submit">Přidat film</button>
    </form>
  )
}

export default AddFilmForm
