
import React from 'react'
import './Project.css'




const data=[{desc:"Basic HTML Backtracking Pages", details:"t is a pure HTML page. I used basic html tags like Heading, Paragraphs, Lists, Tables etc. ", projectLink:"https://rakkeer1994.github.io/backtracking"},
{desc:"To Do App JS", details:"I used multiple DOM Manipulation function which made static page application as dynamic application.worked how to add task & delete task dynamically", projectLink:"https://rakkeer1994.github.io/todo_js"},
{desc:"Digital Clock", details:"While developing this project, I worked on multiple HTML tags, and various CSS properties. Most importantly Iintroduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS", projectLink:"https://rakkeer1994.github.io/project_clock"},
{desc:"Basic HTML Backtracking Pages", details:"", projectLink:"https://rakkeer1994.github.io/backtracking"}]





const Project = () => {
  return (
    <div> 
        <center><h2 style={{color:"white"}}> Here Is My Latest Project List </h2></center>

        <div className='projectContainer'>
            {
                data.map((datas)=>{
                    return(
                        <>
                        <div className='projectData'>
                        <span style={{fontSize:"1.6rem", fontWeight:"500"}}>Project Name:</span> <span>{datas.desc}</span> <br/>
                          <span style={{fontSize:"1.6rem", fontWeight:"500"}}>Description:</span> <span>{datas.details}</span> <br/>
                          <span style={{fontSize:"1.6rem", fontWeight:"500"}}>Project Repo:</span> <span><a style={{textDecoration:"none"}} href={datas.projectLink}>Repo</a></span>
                        </div>
                        </>
                    )
                })
            }
        </div>
       
    </div>
  )
}

export default Project







