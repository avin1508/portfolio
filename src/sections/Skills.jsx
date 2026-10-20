const skills = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Git', 'HTML', 'CSS']

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
