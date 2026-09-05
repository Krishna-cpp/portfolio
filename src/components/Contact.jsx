function Contact() {
  return (
    <section id="contact" className="px-8 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        I'm always open to discussing new projects, opportunities, or just talking tech.
      </p>
      <div className="flex justify-center gap-6">
        <a href="mailto:krishnasingh1007.k@gmail.com" className="text-blue-600 font-medium">
          Email
        </a>
        <a href="https://github.com/Krishna-cpp" target="_blank" className="text-blue-600 font-medium">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/krishna-kumar-2aba79315/" target="_blank" className="text-blue-600 font-medium">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact