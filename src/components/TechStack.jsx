import HTML from '../assets/logos/html.png';
import CSS from '../assets/logos/CSS-Logo.png';
import Tailwind from '../assets/logos/tailwind.png';
import VanillaX from '../assets/logos/vanilla-extract.svg'
import JS from '../assets/logos/javascript.png';
import REACT from '../assets/logos/react.png';
import Next from '../assets/logos/next.png'
import Node from '../assets/logos/node.png';
import Express from '../assets/logos/Expressjs.png';
import Mongo from '../assets/logos/mongo.png';
import Firebase from '../assets/logos/firebase.png';
import Github from '../assets/logos/github.png';
import Figma from '../assets/logos/figma.png'

function TechStack({ tech }) {
  const techMap = {
    html: HTML,
    css: CSS,
    tailwind: Tailwind,
    vanillax: VanillaX,
    javascript: JS,
    react: REACT,
    next: Next,
    node: Node,
    express: Express,
    mongo: Mongo,
    firebase: Firebase,
    github: Github,
    figma: Figma
  };
  return (
    <div className=''>
      <ul className='flex'>
        <div className='m-auto grid grid-cols-4 gap-3 max-w-[300px]'>
          {tech.map((item, index) => (
            <li key={index}>
              <img src={techMap[item]} alt={item} className='h-16 md:h-12'/>
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default TechStack