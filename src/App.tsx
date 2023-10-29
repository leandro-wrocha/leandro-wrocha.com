function App() {
  return (
    <div
      id="container"
      className="flex flex-col items-center px-4 py-10 bg-zinc-100 dark:bg-zinc-800"
    >
      <div className="cursor-pointer rounded-full flex justify-center items-center w-[280px] h-[280px] bg-zinc-300 shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-opacity-10 hover:ring-zinc-400 dark:bg-zinc-700 dark:hover:ring-opacity-10 dark:shadow-zinc-700 dark:hover:shadow-zinc-700">
        <img
          src="/profile.png"
          className="rounded-full object-cover w-[260px] h-[260px]"
          alt="profile"
        />
      </div>

      <div className="space-y-4 mt-8">
        <h1 className="text-6xl font-bold text-center dark:text-zinc-300">
          Leandro Rocha
        </h1>

        <h3 className="text-xl text-center dark:text-zinc-300">
          Bem-vindo à minha jornada como desenvolvedor backend.
        </h3>
      </div>

      <ul className="mt-20 grid grid-cols-1 grid-flow-row gap-x-4 gap-y-4 sm:grid-cols-list">
        <a
          href="https://linkedin.com/in/leandro-wrocha"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-4 border border-zinc-400 rounded-lg flex flex-col justify-center hover:border-sky-500 hover:text-sky-500 hover:ring-4 hover:ring-opacity-10 hover:ring-sky-800 dark:text-zinc-300 dark:hover:ring-sky-900 dark:hover:ring-opacity-30 dark:hover:ring-8"
        >
          <strong className="text-lg">Linkedin</strong>
          <p className="text-sm ">
            Explore minhas postagens sobre ideias e desenvolvimento
            profissional.
          </p>
        </a>

        <a
          href="https://instagram.com/leandro._wrf"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer px-4 py-4 border border-zinc-400 rounded-lg flex flex-col justify-center hover:border-sky-500 hover:text-sky-500 hover:ring-4 hover:ring-opacity-10 hover:ring-sky-800 dark:text-zinc-300 dark:hover:ring-sky-900 dark:hover:ring-opacity-30 dark:hover:ring-8"
        >
          <strong className="text-lg">Instagram</strong>
          <p className="text-sm">
            Aqui você pode acompanhar meu dia-a-dia, na evolução como
            desenvolve- <br />
            dor backend.
          </p>
        </a>

        <a
          href="https://github.com/leandro-wrocha"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer px-4 py-4 border border-zinc-400 rounded-lg flex flex-col justify-center hover:border-sky-500 hover:text-sky-500 hover:ring-4 hover:ring-opacity-10 hover:ring-sky-800 dark:text-zinc-300 dark:hover:ring-sky-900 dark:hover:ring-opacity-30 dark:hover:ring-8"
        >
          <strong className="text-lg">Github</strong>
          <p className="text-sm">Acompanhe a evolução dos meus projetos .</p>
        </a>
      </ul>
    </div>
  )
}

export default App
