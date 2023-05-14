import React from 'react'
import './project.css'
import ProjectCard from './projectCard'
import { projects } from '../../data'
export default function Project() {
  return (
    <>
        <h2 style={{textAlign:"center"}}>Projects</h2>
    <div className='project'>
        {projects["projects"].map((data,id)=>(
            <ProjectCard key={id} heading={data.Title} desc={data.Desription} github={data.github} live={data.live}/>
        ))
        // <ProjectCard />
        }
    
    </div>
    </>
  )
}
