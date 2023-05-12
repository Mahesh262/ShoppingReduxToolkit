import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SwipeCard from './Cards/SwipeCard'
import {FaSearch} from 'react-icons/fa'
import './Header.css'
import {FiCheckCircle} from 'react-icons/fi'
import TrendingCourse from './Cards/TrendingCourse'
const MainContent = () => {
  return (
    <>
        <Container className='d-flex'style={{paddingTop:"50px"
         ,display:"flex", flexWrap:"wrap",}}>
        <Row sm={12} md={12} >


  <Col  sm={12} md={3} style={{overflow:"hidden"}}>
   <div>
   <p  className='three-lines'>Advanced  medical skill atyour finger tips </p>
    
    </div> 
    <Row style={{width:"300px"}}>
      <Col>
      <p> <FiCheckCircle style={{fontSize:"25px",color:"green"}}/><span>500k Alumni </span></p>
<p> <FiCheckCircle style={{fontSize:"25px",color:"green"}}/>192 Countries </p>
      </Col>
 <Col>
 <p><FiCheckCircle style={{fontSize:"25px",color:"green"}}/>250+ courses </p>
<p><FiCheckCircle style={{fontSize:"25px",color:"green"}}/>20+ Specialisties  </p>
 </Col>
    </Row>
    <div className="search-input pt-3">
      <input type="text" placeholder="Search Here..." style={{border:"2px solid orange", borderRadius:"22px", height:"50px"}} />
      <FaSearch className="search-icon" />
    </div>

</Col>
<Col sm={12} md={9}>
          <SwipeCard/> 
          </Col>
        </Row>
        {/* First Page */}
        <Row sm={12} md={12} style={{ width:"100%"}}>
          <Col  sm={12} xl={12}className='pt-5'>
          <TrendingCourse/>
          </Col>
          <Col>
          
          </Col>
        </Row>
         
          
        
        </Container>
        
      
    </>
  )
}

export default MainContent
