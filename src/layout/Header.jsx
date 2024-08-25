

function Header() {
  return (
    <nav className="font-inter w-screen flex justify-center">
      <div className="w-full max-w-4xl">
        <ul className="flex justify-center m-auto">
          <a href="#projects"><li className="p-2 m-5 hover:text-blue-800 font-bold cursor-pointer">projects</li></a>
          <a href="#about"><li className="p-2 m-5 hover:text-blue-800 font-bold cursor-pointer">about</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Header