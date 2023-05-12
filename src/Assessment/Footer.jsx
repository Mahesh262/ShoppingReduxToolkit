import React from 'react'
import {Container, Row,Col,Card } from 'react-bootstrap'
import Institute from "../Assessment/Cards/Institute.png"
import { Button} from '@mui/material'
import ServiceCaller from '../Assessment/Cards/ServiceCaller.png'
import Friends from './Cards/Friends.png'
import {BsFacebook,BsLinkedin,BsTwitter,BsYoutube,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <Container className='pt-4'> 
      <Col xl={12} style={{ paddingTop:"20px",display:"flex", textAlign:"center",alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
        <div>  <h2 style={{fontSize:"40px"}}> why are we the favourite of 500,000  doctors across 192 countries</h2></div>
      </Col>
      <Col xl={12} sm={12}style={{display:"flex", textAlign:"center",alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
      <div> <h5>At Medvaristy , we inted look ambigious, can be change reharbsely</h5> </div>
      </Col>

      <Col style={{display:"flex", flexWrap:"wrap",alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
      <Col xl={12}>
        <Card>
<img src={Institute} alt="Institue" width={"100%"}/>
        </Card>
      </Col>

      <Col xl={12}  style={{display:"flex",backgroundColor:"#Be4225", color:"#Faf7f6" ,paddingTop:"30px", flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
        <Col xl={12} style={{textAlign:"center", padding:"20px"}}><h1>Medvarsity In Numbers</h1></Col>
        <Col xl={3}>
          <h1>100K</h1>
          <p>Active learners</p>
        </Col>
        <Col xl={3}>
          <h1>192K</h1>
          <p>Countries</p>
        </Col>
        <Col xl={3}>
          <h1>23000K</h1>
          <p>Monthly Branded Intractions</p>
        </Col>
        <Col xl={3}>
          <h1>500K</h1>
          <p>Intractions</p>
        </Col>
      
      </Col>
      </Col>
      {/* Service Center  */}


       <Col xl={12} style={{paddingTop:"30px", display:"flex", flexWrap:"wrap"}}>
       <Col xl={6} style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyItems:"center"}}>
        <Col xl={12}><h1>Medvaristy Support</h1>
        <p> For Queries, feedback,& assistance(9AM-&PM)</p> 
        <Button variant="contained"  color='success'>Request a Call back</Button>
        </Col>
       </Col>
       <Col xl={6}>
       <div>
        <img src={ServiceCaller} alt="Institue" width={"100%"}/>
       </div>
       </Col>
       </Col>
      {/* tags  */}
        
       <Col  className="pt-5" xl={12}   style={{display:"flex",flexWrap:"wrap",}}>
       <Col xl={8}>
        <Col xl={12}> <h1>In the News</h1></Col>
        <Col xl={12}style={{ color:'#76b5c5'}}><Card>  <p>360 Approach in hear failure Managment -Dr Brajesh kumar ,Head Medicover Hospital Mumbai</p></Card>
        <Card>  <p>Management of Pediatric Pneumonia by Dr Bharat Parmar, head Peaditrics, ZYDUS MEDICAl college</p></Card>
        </Col>
       
       
       </Col>
       <Col xl={4} style={{borderRadius:"20px", boxShadow:"2px 2px 2px #888888"}}>
<Col xl={12} style={{borderRadius:"20px",}}><h1>Invite Friends </h1></Col>
<Col>
  <img src={Friends} alt="Friends" style={{width:"100%"}}/>
  <Button>Share</Button>

</Col>

       </Col>
       </Col>


    </Container>
    <Row>
      <Col  xl={12} style={{backgroundColor:"black",  display:"flex",justifyContent:"center", alignItems:"center",}}>
      <Col xl={4} style={{color:"whitesmoke"}}>
        <div> <Button color='info'><h1>Medivarity</h1> </Button></div>
        <Col style={{display:"flex", gap:"20px "}}>
        <div><BsFacebook  style={{fontSize:"30px",color:"blue"}}/>
        
        </div>
        <div> <BsLinkedin style={{fontSize:"30px",backgroundColor:"blue"}}/></div>
        <div> 
        <BsTwitter style={{fontSize:"30px",color:"pink"}}/>

        </div>
        <div>
        <BsYoutube style={{fontSize:"30px",color:"red"}}/>

        </div>
        <div>
        <BsInstagram style={{fontSize:"30px",color:"red"}}/>
          
        </div>
        </Col>

      </Col>
      <Col xl={8} className='pt-5' style={{display:"flex",justifyContent:"center", color:"whitesmoke", alignItems:"center"}}>
<Col xl={6}> 
<div><h5>Company Info</h5>  </div>
<div>
  <p>About Us</p>
  <p>Assimilate</p>
  <p>Careers</p>
  <p>Book & Journal</p>
</div>
</Col>
<Col xl={6}>
  <Col> <h5> Legal</h5> </Col>
<Col><p>Privacy Policy</p>
<p>Terms&Conditions</p>
<p>Financial Support</p>
<p>Help & Support</p>

</Col>

</Col>
      </Col>
      </Col>
    </Row>
    </>

  )
}

export default Footer
