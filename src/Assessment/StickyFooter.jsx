import React from 'react'
import { Row,Col} from 'react-bootstrap'
import {FaWhatsapp} from 'react-icons/fa'
import {HiMail,HiGlobeAlt} from 'react-icons/hi'
import {MdOutlineLocalPhone} from 'react-icons/md'

const StickyFooter = () => {
  return (
    <Row>
       <Col style={{display:"flex", flexDirection:"col",padding:"20px", justifyContent:"space-evenly" ,alignItems:"center"}}>
       <div> <p> <HiMail style={{fontSize:"30px",color:"orange"}}/> <span>Contact us</span></p> </div>

       <div> <p><FaWhatsapp style={{fontSize:"30px", color:"green"}}/> <span>9059896675 </span></p>  </div>
       
       <div><p><MdOutlineLocalPhone style={{fontSize:"30px", color:"#1e81b0"}}/><span>1800-103-6006 </span> </p> </div>
       <div> <p> <HiGlobeAlt style={{fontSize:"30px", color:"#1e81b0"}}/><span>  +91 4040503010</span></p></div>
       
       
       </Col>
    </Row>
  )
}

export default StickyFooter
