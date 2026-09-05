function Skills() {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 
    'PostgreSQL', 'Docker', 'Git', 'Java'
  ]

  return (
    <section id="skills" className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills