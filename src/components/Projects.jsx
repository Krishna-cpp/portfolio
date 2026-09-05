function Projects() {
  const projects = [
    {
      title: 'Movie Ticket Booking System',
      description: 'An Angular-based movie ticket booking simulation with seat selection and a full booking workflow.',
      tech: ['Angular', 'TypeScript'],
      link: 'https://github.com/Krishna-cpp/movie-ticket-booking-system',
      featured: true
    },
    {
      title: 'Employee Tax Calculator',
      description: 'A Java-based tax calculator using OOP principles, input validation, and a menu-driven interface.',
      tech: ['Java'],
      link: 'https://github.com/Krishna-cpp/employee-tax-calculator-java',
      featured: false
    },
    {
      title: 'Gym Management System',
      description: 'A JavaScript-based system to manage gym members, plans, and schedules.',
      tech: ['JavaScript'],
      link: 'https://github.com/Krishna-cpp/gym-management-system',
      featured: false
    },
  ]

  return (
    <section id="projects" className="px-8 py-20 border-b-4 border-[#0D0D0D] bg-white">
      <h2 className="text-4xl font-bold tracking-tight mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
          className={`p-6 border-4 border-[#0D0D0D] shadow-[6px_6px_0px_#0D0D0D] ${
  project.featured ? 'bg-[#FFD60A]' : 'bg-[#F5F3EF]'
}`}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-800 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-sm px-2 py-1 bg-white text-black border-2 border-[#0D0D0D] font-medium">
                  {t}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="font-bold underline underline-offset-4"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects