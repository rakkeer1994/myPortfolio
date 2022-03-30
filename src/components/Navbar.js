
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import {FaAlignJustify} from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
  const [bimenu, setBimenu]=useState("")
  const ChangeBimenu = ()=>{
    let val = bimenu
    if(val===''){setBimenu("showBimenuList")}
    else{setBimenu("")}
           
           console.log("bimeu clicked")
  }
  return (
    <>
    <div  className='navbarList'>
    
       <div className='heading'> Rakesh Kumar</div>
       <div className='bimenu' onClick={ChangeBimenu}><FaAlignJustify /> </div>
            <div className={`list${bimenu}`}>
            <ul>
                 <li> <NavLink className='animatLine' to='/'>Home</NavLink> </li>
                 <li><NavLink className='animatLine' to='/about'>About</NavLink></li>
                 <li><NavLink className='animatLine' to='/resume'>Resume</NavLink></li>
                 <li><NavLink className='animatLine' to='/portfolio'>Portfolio</NavLink></li>
                 <li><NavLink className='animatLine' to='/contact'>Contact Us</NavLink></li>
                 {/* <li><NavLink className='animatLine' to='/about'>About</NavLink></li> */}
            </ul>
            </div>
    </div>
    
    </>
  )
}

export default Navbar