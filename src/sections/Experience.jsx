const experience = [
  {
    role: 'Job Title',
    company: 'Company Name',
    period: '2024 – Present',
    description: 'Describe your responsibilities and achievements in this role.',
  },
]

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <ol className="space-y-8 border-l border-white/10 pl-6">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`}>
              <h3 className="text-xl font-semibold">
                {item.role} · <span className="text-cyan-400">{item.company}</span>
              </h3>
              <p className="text-sm text-slate-400">{item.period}</p>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
