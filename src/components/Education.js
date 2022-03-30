
import React from "react"
import './education.css'




const data=[{degree:"Master Of Technology", year:"June 2017 to June 2020", branch:"Power System Engineering", college:"Corporate Group Of Institution Bhopal(Madhya Pradesh)"},
{degree:"Batchelor Of Engineering", year:"June 2014 to June 2017", branch:"Electrical Engineering", college:"Indira Gandhi Govt Engineering College Sagar(Madhya Pradesh)"}]
const Education=()=>{
    return(
      <>
      <center><h2>Education Qualification</h2></center>

      <div className="eduList">
      {
          data.map((val)=>{
              return(
                  <div className="eduDetails">
                      <span className="degree">{val.degree}</span> <span className="branch">({val.branch})</span>
                      <h4>{val.year}</h4>
                      <p className="college">{val.college}</p>
                  </div>
              )
          })
      }
      </div>
      </>
    )
  }
  export default Education