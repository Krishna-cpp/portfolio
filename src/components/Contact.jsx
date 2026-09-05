function Contact() {
  return (
    <section id="contact" className="px-8 py-24 text-center">
      <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
      <p className="text-gray-700 mb-8 max-w-md mx-auto text-lg">
        I'm always open to discussing new projects, opportunities, or just talking tech.
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="mailto:krishnasingh1007.k@gmail.com" 
          className="px-6 py-3 bg-[#FFD60A] border-4 border-[#0D0D0D] font-bold shadow-[4px_4px_0px_#0D0D0D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          Email
        </a>
        <a 
          href="https://github.com/Krishna-cpp" 
          target="_blank" 
          className="px-6 py-3 bg-[#FFD60A] border-4 border-[#0D0D0D] font-bold shadow-[4px_4px_0px_#0D0D0D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/krishnakumar-2aba79315" 
          target="_blank" 
          className="px-6 py-3 bg-[#FFD60A] border-4 border-[#0D0D0D] font-bold shadow-[4px_4px_0px_#0D0D0D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact