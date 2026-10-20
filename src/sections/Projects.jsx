const projects = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the tech behind it.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and the tech behind it.',
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
