function Skills() {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 
    'PostgreSQL', 'Docker', 'Git', 'Java'
  ]

  return (
    <section id="skills" className="px-8 py-20 border-b-4 border-[#0D0D0D]">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span 
  key={skill} 
  className="px-4 py-2 bg-[#FFD60A] border-4 border-[#0D0D0D] font-medium shadow-[3px_3px_0px_#0D0D0D]"
>
  {skill}
</span>
        ))}
      </div>
    </section>
  )
}

export default Skills