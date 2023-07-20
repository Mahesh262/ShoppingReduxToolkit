import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Contacts.css'
const About = () => {
  return (
    <div className="about-container"id='About'style={{
      backgroundColor:"wheat"
     }}>
      <Container>
        <Row>
          <Col md={6} className='profile-edit'>
          <div className="profile-image">
              <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"  className="profile-image" />
            </div>
          </Col>
          <Col md={6} className='about-me'>
            <Row style={{display:"flex",justifyContent:"space-around"}}>
              <Col>
              <p>Location:Hyderbad</p>
              <p>Age:27</p>
              <p style={{display:"inline"}}>Nationality:<span>Hindhu</span></p>
              </Col>
              <Col>
              <p>Interest : React js</p>
              <p>Company: None</p>
              <p>Role: UI Developer</p>
              
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
