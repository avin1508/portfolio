const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold text-white">
          Avinash
        </a>
        <ul className="hidden gap-8 text-sm text-slate-300 sm:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-cyan-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
