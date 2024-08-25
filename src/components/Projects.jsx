import Tab from "./MyTab/MyTab"

function Projects() {
  return (
    <div className="">
      <a id="projects"/>
        <p className="text-4xl font-playfair">Projects</p>
        <p className="font-inter font-light md:mt-2">Small, Big, Old & New</p>

        <div className="m-6">
          <Tab/>
        </div>
    </div>
  )
}

export default Projects