import Carousell from "./Carousell"

function Showcase() {
  return (
  <div className="relative w-full h-[40vh] text-center flex items-center justify-center">
    <div className="absolute bottom-0 bg-sky-200 md:h-80 h-52 w-[500px] md:w-[820px] rounded-t-full opacity-40 blur-2xl animate-glow"></div>
    <div className="relative z-20">
      <p className="text-3xl md:text-5xl font-playfair ">Hey, I'm Damon</p>
      <p className="text-2xl md:text-4xl font-light m-10 ">A JavaScript Developer</p>

      <div className="mb-8">
        <Carousell/>
      </div>
    </div>
  </div>
  )
}

export default Showcase