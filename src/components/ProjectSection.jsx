import { DASH3_BG, PORT_BG, STREAMVIVE_BG, TOGETHA_BG } from '@/util/constant'

import React from 'react'
import MainContainer from './MainContainer'
import { Button } from './ui/button'



    const  projects = [
        {
            title: "Leetcode Dsa Assisted Coding Plateform",
            description: "Leetcode DSA Assisted Coding Platform is a full-stack web application that provides users with a seamless experience to practice and enhance their coding skills. Built with React for the frontend and Node.js for the backend, it offers a user-friendly interface and robust functionality.",
            image: TOGETHA_BG,
            Git_link: "https://github.com/",
            live_link: "Na",
            buttons :[
                "React", "Redux" ,"Nodejs","MongoDB","Redis", "Lucide" , "Js", 
            ]
        },
              {
            title: "DSA-Vizualizer",
            description: "DSA-Vizualizer is a web application that provides interactive visualizations of various data structures and algorithms. Built with React for the frontend and Node.js for the backend, it offers a user-friendly interface for users to explore and understand complex concepts through engaging animations and step-by-step explanations.",
            image: STREAMVIVE_BG,
            Git_link: "https://github.com/",
                 live_link: "https://dsa-visulize.netlify.app/",
                        buttons :[
                "React", "Redux" ,"Tailwind","Js"
            ]

        },
                  {
            title: "ConnectHub",
            description: "ConnectHub is online meeting platform that enables users to host and join virtual meetings with ease. Built with React for the frontend and Node.js for the backend, it offers a seamless experience for scheduling, managing, and participating in online meetings.",
            image: DASH3_BG,
            Git_link: "https://github.com/",
                 live_link: "Na",
                            buttons :[
                "React","tailwind","MongoDb", "Js","Node Js","Express", "Socket.io","WebRTC"
            ]
        },
      {
   title: "AstroScope",
   description: "A Astrology web application that provides users with personalized horoscope readings, astrological insights, and compatibility analysis. Built with Jvascript and html and css .",
   image: PORT_BG, // ek screenshot daal dena
   Git_link: "https://github.com/rohittt-29/portfolio", 
   live_link: "Na",
   buttons: ["Js","Html","Css"]
}

    ]
    const ProjectSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
      {projects.map((proj ,index)=>(
        <MainContainer key={index} title={proj.title}
          description={proj.description}
          image={proj.image}
          Git_link={proj.Git_link}
          live_link={proj.live_link}
          buttons={proj.buttons}
          
        />
      ))}
    </div>
  )
}

export default ProjectSection
