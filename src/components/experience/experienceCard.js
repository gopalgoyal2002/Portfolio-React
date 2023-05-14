import React from 'react'
import './experience.css'
import Zoom from 'react-reveal/Zoom';
export default function ExperienceCard(props) {
  return (
    <>
    <div className='Experience-card'>
     <Zoom right cascade>
        
       <div className='Experience-card-header'>
            <a href={props.link}  target="_blank"><strong>{props.componyName}</strong></a>
            <span>{props.designation}</span>
            <span>{props.time}</span>

       </div>
       <hr/>
       <div className='Experience-card-description'>
        <ul>
            {
                props.desc["description"].map((data,id)=>(
                    <li><p>{data}</p></li>
                ))
            }
        </ul>
       </div>

    </Zoom>
    </div>
    </>
  )
}
