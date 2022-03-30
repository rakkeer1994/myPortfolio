import React from 'react'
import './skills.css'




const Skills = () => {
  return (
    <div>
        <center><h2>Skills</h2></center>
        <button className='skillbtn'>HTML</button> <div style={{display:"inline-block", width:"72%", border:"3px solid red"}}></div> <span className='dot'>.</span> <span  className='percentSpn'>70%</span> <br></br>
        <button className='skillbtn'>CSS</button> <div style={{display:"inline-block", width:"60%", border:"2px solid red"}}></div> <span className='dot'>.</span> <span  className='percentSpn'>60%</span> <br></br>
        <button className='skillbtn'>JAVA SCRIPT</button> <div style={{display:"inline-block", width:"60%", border:"2px solid red"}}></div> <span className='dot'>.</span> <span className='percentSpn' >60%</span> <br></br>
        <button className='skillbtn'>REACT JS</button> <div style={{display:"inline-block", width:"60%", border:"2px solid red"}}></div>  <span className='dot'>.</span><span  className='percentSpn'>60%</span> <br></br>
        <button className='skillbtn'>GIT</button> <div style={{display:"inline-block", width:"50%", border:"2px solid red"}}></div><span className='dot'>.</span> <span className='percentSpn'>50%</span > <br></br>
    </div>
  )
}

export default Skills