import React, { useState } from 'react'
import './resume.css'
import Project from './Project'
import Skills from './Skills'
// import About from './About'
import Education from './Education'
const About=()=>{
  return(
    <>
      <div className="para">
        <p>I am an Electrical Engineer and i am turning into web designing <br></br>I want to become a full stack web developer <br></br> in the guidence of prepbytes elevation acadmy mentors</p>
        <p>My hobby is bicycling which is inspired from my father because  <br></br> they i always try to use bicycle for their works <br></br> apart from this i always enjoy cooking and rope jumping when i am stuck in coding </p>
     </div> 
    </>
  )
}
const Resume = () => {
  const [display, setDisplay]=useState("education")
  return (
    <div className='resumeCont'>
      <center><h1 style={{color:"white"}}>Resume</h1></center>
       <div className='subContainer'>
          <div className='subLeft'>
            
             <button className='resumeBtn' onClick={()=>setDisplay("education")}>Education</button> <hr></hr>   
             <button className='resumeBtn' onClick={()=>setDisplay("skills")}>Skills</button> <hr></hr>   
             <button className='resumeBtn' onClick={()=>setDisplay("project")}>Project</button> <hr></hr> 
              <button className='resumeBtn'  onClick={()=>setDisplay("experiance")}>Experiance</button> <hr></hr>
               <button className='resumeBtn'  onClick={()=>setDisplay("certificates")}>Certification</button> <hr></hr>      
          </div>

          <div className='subRight'>
            {display==="about" && <About/>}
            {display==="education" && <Education/>}
            {display==="project" && <Project/>}
            {display==="skills" && <Skills/>}
          </div>
       </div>
    </div>
  )
}

export default Resume