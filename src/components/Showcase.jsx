import Carousell from "./Carousell"

function Showcase() {
  return (
  <div className="relative w-full h-[50vh] text-center overflow-hidden flex items-center justify-center">
    <div className="absolute bottom-0 bg-sky-200 h-52 w-[820px] rounded-t-full opacity-40 blur-2xl animate-glow"></div>
    <div className="relative z-20">
      <p className="text-3xl md:text-5xl font-playfair m-12">Hey, I'm Damon</p>
      <p className="text-2xl md:text-4xl font-light m-20 ">A JavaScript Developer</p>

      <div className="mb-8">
        <Carousell/>
      </div>
    </div>
  </div>
  )
}

export default Showcase