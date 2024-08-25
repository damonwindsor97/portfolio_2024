import TechStack from './TechStack'

function ProjectPanel({image, title, description, tech}) {
  return (
    <div className="rounded-lg border p-4 bg-gray-50 hover:border-blue-300 cursor-pointer mb-10 mt-10">
        <div className='md:flex'>
            <div className="flex items-center justify-center">
                <img className="md:w-[250px] w-full" src={image} alt=""/>
            </div>

            <div className="p-4 md:w-[500px] text-center md:text-start">
                <p className="text-xl font-inter font-bold ">{title}</p>
                <p className="">{description}</p>
            </div>

            <div className="">
                <TechStack tech={tech}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectPanel