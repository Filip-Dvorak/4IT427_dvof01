import AddFilmForm from '../Components/AddFilmForm'

function AddFilmPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <span className="text-sm uppercase tracking-[0.35em] text-red-500">Film Watchlist</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Přidat film</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Vyplň údaje filmu a přidej ho do svého watchlistu.
          </p>
        </header>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <AddFilmForm />
        </div>
      </div>
    </div>
  )
}

export default AddFilmPage
