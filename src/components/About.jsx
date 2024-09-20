import { Link } from 'react-router-dom'

import LinkedLogo from '../assets/logos/linkedin.png'
import GithubLogo from '../assets/logos/github.png'

function About() {
  return (
    <div className="max-w-[980px] m-auto p-4 rounded-xl bg-slate-50 mb-12">
      <a id="about"/>
        <div className="mt-4 mb-4 font-inter">
            <p className="">Hey my name’s Damon, I’m a 27yr old JavaScript Developer from Melbourne, Australia - I create
            websites and applications using React & JavaScript.</p>
            <p className="mt-2">Primarily used to a MERN stack (Mongo, Express, React & Node) but have had some 
            experience in FERN (Firebase, Express, React & Node).</p>
            <p className="mt-2">Front-End development: HTML, CSS, JavaScript, SASS, SCSS, Bootstrap, Tailwind CSS, Vanilla Extract CSS, Reactjs, Nextjs, Svelte.</p>
            <p className="mt-2">Back-End development: Node.js, Express.js, MySQL, Mongo DB, Google Firebase.</p>
        </div>

        <div className="flex">
          <div className='flex m-auto items-center'>
            <Link to="https://www.linkedin.com/in/damon-windsor-bb5092297"><img src={LinkedLogo} className='m-4 h-14 hover:scale-110'/></Link>
            <Link to="https://github.com/damonwindsor97"><img src={GithubLogo} className='m-4 h-10 hover:scale-110'/></Link>
          </div>
        </div>
    </div>
  )
}

export default About