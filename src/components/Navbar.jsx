function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-[#F5F3EF] border-b-4 border-[#0D0D0D]">
      <h1 className="text-2xl font-bold tracking-tight">Krishna Kumar</h1>
      <ul className="flex gap-8 font-medium">
        <li><a href="#about" className="hover:text-[#FF4D3D] transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-[#FF4D3D] transition-colors">Projects</a></li>
        <li><a href="#skills" className="hover:text-[#FF4D3D] transition-colors">Skills</a></li>
        <li><a href="#contact" className="hover:text-[#FF4D3D] transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar