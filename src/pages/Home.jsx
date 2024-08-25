import Showcase from "../components/Showcase"
import Projects from "../components/Projects"
import About from "../components/About"

function Home() {
  return (
    <div className="">
      <div className="">
        <Showcase/>
      </div>

      <div className="p-4 md:p-0 md:max-w-[1000px] m-auto md:mt-20">
        <About/>
        <Projects/>
      </div>
    </div>
  )
}

export default Home