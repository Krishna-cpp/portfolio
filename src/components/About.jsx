function About() {
  return (
    <section id="about" className="px-8 py-20 border-b-4 border-[#0D0D0D] bg-white">
      <h2 className="text-4xl font-bold tracking-tight mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
          I'm a Computer Science undergraduate at Christ (Deemed to be University), 
          Bangalore, with a strong academic record and a growing interest in 
          software development and backend systems. I enjoy building projects 
          that apply core CS concepts to real-world problems — from a Java-based 
          tax calculator using OOP design to full-stack web apps. Currently seeking 
          a Summer 2026 internship to gain hands-on industry experience.
        </p>
        <div className="border-4 border-[#0D0D0D] p-6 shadow-[4px_4px_0px_#0D0D0D] shrink-0 md:w-64">
          <p className="text-3xl font-bold">9.27</p>
          <p className="text-sm text-gray-600 mb-4">CGPA</p>
          <p className="text-3xl font-bold">2028</p>
          <p className="text-sm text-gray-600">Expected Graduation, CSE</p>
        </div>
      </div>
    </section>
  )
}

export default About