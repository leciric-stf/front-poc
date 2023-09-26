import { Outlet } from 'react-router-dom'

export function Root() {
  return (
    <>
      <header className="text-primary bg-white w-full p-3 shadow-md">
        <h1>Stefanini</h1>
      </header>

      <main className="grid grid-cols-[200px_1fr]">
        <aside className="border-r border-slate-300 p-4">
          <strong>Incidents</strong>

          <nav>Create new Incident</nav>
        </aside>

        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  )
}
