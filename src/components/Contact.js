import React from 'react';
import './Contact.css';
import contactImg from "../images/about-9.jpg"



const Contact=()=> {
    return (
        <>
        
           <div>
               
<center><h2 className="porthead" id="contact">Contact </h2></center> <br></br>
               <div className="contact">
    <div className="connect">
        <h3>Let's Connect</h3>
        <p>Hey I am always here you can contact <br/> any time 24*7</p>
        <p><i className="fas fa-phone-alt"></i>9993316032</p>
        <p><i className="fas fa-envelope-open"></i>rakkeer1994@gmail.com</p>
        <p><i className="far fa-map-marker-alt"></i>317,Mahawar Nagar,Annapurna  road <br></br> Indore(452009)</p>
    </div>
    <div className="form">
        <h3>Send me massage</h3>
        <form action="">
         <label for="first & last name">Full Nsme:</label> 
         <input type="text" name="first & last name"/> <br></br>
         <label for="moba">Mobile No:</label> 
         <input type="number" name="moba"/> <br></br>
         <label for="mail">Mail Id:</label> 
         <input type="text"/> <br></br>
         <label for="feedback">Message&Feedback</label> 
         <input type="text-area"/>  <br></br>
         <button className="submit">Send Me message</button>
        </form>
    </div>
</div>
</div>
</>
    )
}

export default Contact