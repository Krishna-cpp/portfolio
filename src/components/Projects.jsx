function Projects() {
  const projects = [
    {
      title: 'Movie Ticket Booking System',
      description: 'An Angular-based movie ticket booking simulation with seat selection and a full booking workflow.',
      tech: ['Angular', 'TypeScript'],
      link: 'https://github.com/Krishna-cpp/movie-ticket-booking-system'
    },
    {
      title: 'Employee Tax Calculator',
      description: 'A Java-based tax calculator using OOP principles, input validation, and a menu-driven interface.',
      tech: ['Java'],
      link: 'https://github.com/Krishna-cpp/employee-tax-calculator-java'
    },
    {
      title: 'Gym Management System',
      description: 'A JavaScript-based system to manage gym members, plans, and schedules.',
      tech: ['JavaScript'],
      link: 'https://github.com/Krishna-cpp/gym-management-system'
    },
  ]

  return (
    <section id="projects" className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-sm px-2 py-1 bg-gray-100 rounded">
                  {t}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="text-blue-600 font-medium"
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