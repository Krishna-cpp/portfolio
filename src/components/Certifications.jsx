function Certifications() {
  const certs = [
    { name: 'AWS Academy Graduate — Cloud Foundations', issuer: 'AWS Academy' },
    { name: 'OCI Certified AI Foundations Associate', issuer: 'Oracle' },
    { name: 'MongoDB Basics for Students', issuer: 'MongoDB' },
    { name: 'Software Engineering', issuer: 'Infosys Springboard' },
    { name: 'Network Fundamentals', issuer: 'Infosys Springboard' },
  ]

  return (
    <section id="certifications" className="px-8 py-20 border-b-4 border-[#0D0D0D]">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Certifications</h2>
      <div className="flex flex-wrap gap-4">
        {certs.map((cert) => (
          <div 
            key={cert.name}
            className="p-4 bg-white border-4 border-[#0D0D0D] shadow-[3px_3px_0px_#0D0D0D] max-w-sm"
          >
            <p className="font-bold">{cert.name}</p>
            <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications