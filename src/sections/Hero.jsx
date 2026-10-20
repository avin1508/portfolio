function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Portfolio
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Hi, I&apos;m Avinash.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Welcome to my portfolio. I&apos;m excited to share what I create.
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <a href="#projects" className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400">
              Resume
            </a>
          </div>
        </div>
        <img
          src="/images/avinash-photo.png"
          alt="Avinash"
          className="h-64 w-64 rounded-full border-4 border-cyan-500/40 object-cover sm:h-80 sm:w-80"
        />
      </div>
    </section>
  )
}

export default Hero
