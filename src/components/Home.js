import React from 'react'
import pic from '../images/bg.jpg'
import './Home.css'
import cv from '../images/rakeshcv.pdf'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
const Home = () => {
  return (
    <>
   <div className='homebody'>
   <div className='homeContainer'>
        <div className='homeDetails'><h4>WELCOME TO MY WORLD</h4>
        <h1 style={{color:"red"}}>Hi, I'm Rakesh Kumar Keer</h1>
        <h2>FrontEnd Developer</h2></div>
        <div className='hireMe'>
            <div><button>Hire Me</button></div>
            <div><button><a className='' href={cv}>Resume</a></button></div>
        </div>
        <div><img src={pic} alt='load pics....'/></div>
    </div> <br></br>
    <div><About/></div>
    <div><Resume/></div>
    <div><Portfolio/></div>
    <div><Contact/></div>
   </div>
    </>
  )
}

export default Home