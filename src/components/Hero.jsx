function Hero() {
  return (
    <section className="px-8 py-24 border-b-4 border-[#0D0D0D] bg-[#FFD60A]">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none mb-6">
        Hi, I'm Krishna Kumar
      </h1>
      <p className="text-xl text-gray-800 max-w-xl mb-8">
        Computer Science student focused on Java, backend systems, and full-stack 
        web development. I build projects that turn core CS concepts into real, 
        working software.
      </p>
      <div className="flex gap-4">
        <a 
          href="#projects" 
          className="px-6 py-3 bg-[#0D0D0D] text-white border-4 border-[#0D0D0D] font-bold shadow-[4px_4px_0px_#FF4D3D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          View Work
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="px-6 py-3 bg-white border-4 border-[#0D0D0D] font-bold shadow-[4px_4px_0px_#0D0D0D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          Resume
        </a>
      </div>
    </section>
  )
}

export default Hero