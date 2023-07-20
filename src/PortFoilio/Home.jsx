import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { Button, Card } from 'react-bootstrap';
import {CgChevronDoubleDown} from 'react-icons/cg'
import { Link } from 'react-scroll';
import './Contacts.css'
import ParticlesBg from 'particles-bg';
const Home = () => {
 
  return (
    <div className="home-container"
     style={{ 
      display:"flex", 
      justifyContent:"center",
      alignItems:"center",
      height: "100vh",
      // backgroundImage: "url('https://images.unsplash.com/photo-1627398362552-6a029c1f583c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundSize:"cover",height:"100vh" 
    }} id='Home'>
         <ParticlesBg
        type="square"
        num={30}
        bg={true}
        options={{
          particles: {
            color: {
              value: '#3b0000', // Set the desired color code
            },
            size: {
              value: 2, // Set the desired particle size
              random: true, // Set it to false if you want particles to have a consistent size
              anim: {
                enable: false, // Set it to true if you want particles to have an animated size
              },
            },
            opacity: {
              value: 0.7, // Set the desired opacity value (between 0 and 1)
            },
            move: {
              speed: 3, // Set the desired speed value
            },
            shape: {
              type: 'star', // Set the desired shape ("circle", "square", "triangle", "star", etc.)
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
          },
        }}
      />
      <Card
      className='fall-animation' 
       style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat", 
        backgroundAttachment:"fixed", 
        objectFit: "cover",
        borderColor:"black",
        backgroundSize:"cover",
        width:"600px", height:"400px",
       opacity:"0.6", display:"flex", justifyContent:"center",alignItems:"center"}}>
        <div>
          <Card.Title style={{color:"wheat"}}>Hi I'm Mahesh</Card.Title>
          <Card.Text style={{color:"wheat",wordBreak:'break-all'}}> Experienced Front End Developer specialized in React.js. Passionate about creating visually appealing websites with seamless user experiences.</Card.Text>
          <Card.Text className="social-media-icons"
           style={{display:"flex", 
           justifyContent:"center",
           gap:"20px",
          fontSize:"20px"}}
           >
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook  style={{
                color
              :"ButtonFace", fontSize:"20px"}}/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter  style={{
                color
              :"ButtonFace", fontSize:"20px" }} />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-elluri-a39bb7126/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin   style={{
                color
              :"ButtonFace", fontSize:"20px"}}/>
            </a>
          </Card.Text>
          <div 
          style={{
          display:"flex",
           justifyContent:"center",
           gap:"20px",
           padding:"20px"}}
           >
            <Button href="path_to_your_resume.pdf" variant='secondary'>Download Resume</Button>
            <Button variant="secondary">Contact</Button>
          </div>

          <div className="down-arrow" 
          style={{display:"flex", 
          alignItems:"flex-end", 
          justifyContent:"center",}}>
           <Link to='Contact' style={{color:'wheat'}}> <CgChevronDoubleDown/></Link> 
      </div>
        </div>
      </Card>
      
    </div>
  );
};

export default Home;
