import React from 'react'
import './experience.css'
import ExperienceCard from './experienceCard'
import { experience } from '../../data'

export default function ExperienceComponent() {
  return (
    <>
    <h2 style={{textAlign:"center"}}>Experience</h2>
        <div className='Experience'>
        {
            
            experience["experience"].map((data,id)=>(
            <div>
            <ExperienceCard key={id} time={data.time} desc={data.desc}  componyName={data.componyName} 
            link={data.link} designation={data.Designation}/>
            </div>
        
        ))
 
        }

        </div>
    
    </>
  )
}
