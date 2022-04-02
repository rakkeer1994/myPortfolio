import React from 'react'
import aboutPic from '../images/about.jpg'
import './About.css'




import { FaLinkedin,FaInstagramSquare, FaFacebook, FaFacebookMessenger, FaGithub} from "react-icons/fa"


const styles={width:"100%", backgroundColor:"black", marginTop:"3.7%", color:"white"}
const detailStyle={display:"flex"}
const photoStyle={width:"100%"}
const About = () => {
  return (
    <div style={styles} className='aboutContainer'>
       <center> <h2 className='aboutHeading'>About Me </h2></center>
        <div style={detailStyle} className='aboutDetails'>
           <div  className='aboutPhoto'> <img style={photoStyle} src={aboutPic} alt='loading'/> </div>
           <div className='aboutMe'><p>Knowledgeable Front End Developer adept at creating successful websites. Proficient in HTML, CSS &
           JAVA SCRIPT, REACTJS. I am a hard worker with fast learning capability and self motivated person</p>
           <p>Knowledgeable Front End Developer adept at creating successful websites. Proficient in HTML, CSS &
           JAVA SCRIPT, REACTJS. I am a hard worker with fast learning capability and self motivated person</p>
           <p>Knowledgeable Front End Developer adept at creating successful websites. Proficient in HTML, CSS &
           JAVA SCRIPT, REACTJS. I am a hard worker with fast learning capability and self motivated person</p>
           <div className='icons'>
           <a href='https://www.facebook.com/rakesh.keer.14'><FaFacebook/></a>
           <a href='https://www.facebook.com/rakesh.keer.14'><FaFacebookMessenger/></a>
           <a href='#'> <FaInstagramSquare/></a>
           <a href='https://github.com/rakkeer1994'><FaGithub/></a>
           <a href='https://www.linkedin.com/in/rakesh-kumar-4246a1109/'><FaLinkedin/></a>
        </div>
           </div>
        </div>
        
    </div>
  )
}

export default About