import { useState, useRef } from 'react';


import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

import ProjectPanel from '../ProjectPanel';

import Storefront1Image from '../../assets/projectimages/storefront1.png'
import Storefront2Image from '../../assets/projectimages/storefront2.png'
import LinkifyImage from '../../assets/projectimages/linkify.png'
import MediaAPI from '../../assets/projectimages/api.png'
import Biolink from '../../assets/projectimages/biolink.png'



const projects = [
  {
    id: 0,
    title: "Frontend with Sellix 1",
    description: "A simple frontend website that is linked to Sellix's backend via their Modal.",
    image: Storefront1Image,
    tag: "website",
    tech: ["javascript", "react", "tailwind"],
    link: "https://storefront-frontend-1.onrender.com/"
  },
  {  id: 1,
    title: "Linkify",
    description: "Linkify is a link utility website, giving users different “utilities” in relation to URL’s. Linkify is powered by a custom API.",
    image: LinkifyImage,
    tag: 'webapp',
    tech: ["javascript", "react", "tailwind"],
    link: "https://linkify.gg"
  },
  {  id: 2,
    title: "Media Download API",
    description: "An API built primarily for Linkify, allowing users to download YouTube videos to MP3 & MP4, Soundcloud to MP3 & more to come.",
    image: MediaAPI,
    tag: "api",
    tech: ["javascript", "express", "node"],
    link: "https://github.com/damonwindsor97/media-download-api"
  },
  {  id: 3,
    title: "Frontend with Sellix 2",
    description: "A simple frontend website that is linked to Sellix's backend via their Modal.",
    image: Storefront2Image,
    tag: "website",
    tech: ["javascript", "react", "tailwind"],
    link: ""
  },
  {  id: 4,
    title: "Biolink alternative",
    description: "This “biolink” alternative was made around 2021 when I was first practicing the basics of CSS.",
    image: Biolink,
    tag: "website",
    tech: ["html", "css", "javascript"],
    link: ""
  },
]


function MyTab() {
  const [tab, setTab] = useState(1)
  const [isActive, setIsActive] = useState(false)

  const tabChange = (event, newTab) => {
    setTab(newTab);
  };



  const filteredProjects = (tag) => {
    if (tag === 'all') return projects;
    return projects.filter(project => project.tag === tag);
  };

  return (
    <div>
            <Tabs value={tab} onChange={tabChange}>
                <div className='font-playfair'>
                    <TabsList>
                      <div className='flex'>
                        <div className='ml-2 mr-2'>
                          <Tab value={1} className={tab === 1 ? "bg-gray-200 p-1 rounded" : "p-1 hover:bg-gray-100 rounded"}>
                              All
                          </Tab>
                        </div>
                        <div  className='ml-4 mr-4 '>
                          <Tab value={2} className={tab === 2 ? "bg-gray-200 p-1 rounded" : "p-1 hover:bg-gray-100 rounded"}>
                              API
                          </Tab>
                        </div>
                        <div className='ml-4 mr-4' >
                          <Tab value={3} className={tab === 3 ? "bg-gray-200 p-1 rounded" : "p-1 hover:bg-gray-100 rounded"}>
                              Webapps
                          </Tab>
                        </div>
                        <div className='ml-4 mr-4' >
                          <Tab value={4} className={tab === 4 ? "bg-gray-200 p-1 rounded" : "p-1 hover:bg-gray-100 rounded"}>
                              Websites
                          </Tab>
                        </div>
                      </div>
                    </TabsList>
                </div>



                <div>
                  {/* ALL */}
                  <TabPanel value={1}>
                    <div className='mt-10'>
                      {filteredProjects('all').map((project, index) => (
                        
                        <ProjectPanel
                          key={index}
                          image={project.image}
                          title={project.title}
                          description={project.description}
                          tech={project.tech}
                          link={project.link}
                        />
                      ))}
                    </div>
                  </TabPanel>

                    {/* API */}
                    <TabPanel value={2}>
                      <div className='mt-10'>
                        {filteredProjects('api').map((project, index) => (
                          <ProjectPanel
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                          />
                        ))}
                      </div>
                    </TabPanel>

                    {/* WEBAPPS */}
                    <TabPanel value={3}>
                        {filteredProjects('webapp').map((project, index) => (
                          <ProjectPanel
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                          />                         
                        ))}
                    </TabPanel>

                    {/* WEBSITES */}
                    <TabPanel value={4}>
                        {filteredProjects('website').map((project, index) => (
                          <ProjectPanel
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                          />
                        ))}
                    </TabPanel>
                </div>
            </Tabs>
    </div>

  )
}

export default MyTab
