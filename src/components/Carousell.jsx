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

import Marquee from "react-fast-marquee";


function Carousell() {
  return (
    <div className="relative overflow-hidden border-t border-b p-2 w-[400px] h-16 mx-auto">
      <Marquee className="space-x-2 items-center">
        <img src={HTML} className='h-12 m-1'/>
        <img src={CSS} className='h-12 m-1'/>
        <img src={Tailwind} className='h-12 m-1'/>
        <img src={VanillaX} className='h-12 m-1'/>
        <img src={JS} className='h-12 m-1'/>
        <img src={REACT} className='h-12 m-1'/>
        <img src={Next} className='h-12 m-1'/>
        <img src={Node} className='h-12 m-1'/>
        <img src={Express} className='h-12 m-1'/>
        <img src={Mongo} className='h-12 m-1'/>
        <img src={Firebase} className='h-12 m-1'/>
        <img src={Github} className='h-12 m-1'/>
        <img src={Figma} className='h-12 m-1'/>
      </Marquee>
    </div>
  )
}

export default Carousell