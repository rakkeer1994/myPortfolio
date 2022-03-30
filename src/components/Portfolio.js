import React from 'react'
import './portfolio.css'





import pic1 from './portimage/pic1.jpg'
import pic2 from './portimage/pic2.jpg'
import pic3 from './portimage/pic3.jpg'
import pic4 from './portimage/pic4.jpg'
const Portfolio = () => {
  return (
    <div>
         {/* portfolio section   */}
<h2 className="porthead" id="portfolio">PortFolio</h2> 
<div className="portfolio"> 
    <div className="portimage"><img src={pic1} height="200px" width="400px"/>
         <img src={pic2} height="200px" width="400px"/> <br></br>
         <img src={pic3} height="200px" width="400px"/>
         <img src={pic4} height="200px" width="400px"/>
    </div>
</div> <br></br>
    </div>
  )
}

export default Portfolio