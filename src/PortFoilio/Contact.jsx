import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { HiMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import './Contacts.css'
import './Porfolios.css'
const Contact = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="contact-container" id='Contact' style={{backgroundColor:"black",overflow:"hidden"}}>
<Container className='fade-in' >

      <Row>
         <Col style={{color:"wheat"}}>
         <HiMail className="contact-icon" />
              <h2>Get in Touch</h2>
              </Col>
         <Col style={{color:"wheat"}}>
         <h2>Send us a Message</h2>
              <p className="contact-text">Drop us a message and we'll get back to you as soon as possible.</p>
          </Col>     
              </Row>
        <Row>
          <Col md={6}>
            <div className="contact-form" style={{backgroundColor:'gray'}}>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>
                <Button variant='secondary' type="submit">Send</Button>
              </Form>
              
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-info" style={{color:"wheat"}}>
              <div className="contact-details">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-item-icon" />
                  <p>Markapur, India</p>
                </div>
                <div className="contact-item">
                  <HiMail className="contact-item-icon" />
                  <p>maheshelluri262@gmail.com</p>
                </div>
                <div className="contact-item">
                  <RiInstagramLine className="contact-item-icon" />
                  <p>Instagram</p>
                </div>
                <div className="contact-item">
                  <RiTwitterLine className="contact-item-icon" />
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
</Container>

    </div>
  );
};

export default Contact;
