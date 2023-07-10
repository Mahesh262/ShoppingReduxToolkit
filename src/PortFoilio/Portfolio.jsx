import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './Porfolios.css'
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tristique ipsum vitae gravida.',
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      link: 'https://shopping2-three.vercel.app/',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Sed at tellus vitae erat tristique bibendum. Vivamus congue, sapien sed tincidunt sagittis.',
      image:"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      link: 'https://my-porfile.vercel.app/',
    },
    {
      id:3,
      title:"Project 3",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo tristique ipsum vitae gravida.",
      image:"https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div  id='Portfolio' style={{ 
    backgroundImage: "url('https://images.unsplash.com/photo-1627398362552-6a029c1f583c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", 
    height:"120vh",
    overflow:"hidden",
   backgroundSize:"cover"}} >
     <Row style={{padding:"3em",textAlign:"center",color:"wheat"}}> <h2>Portfolio</h2> </Row>
     <Container>
      <Row  style={{display:"flex", flexGrow:"inherit",flexWrap:"wrap"}}>
        {projects.map(project => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <Card className="project-card" style={{width:"300px",}}>
              <div className="thumbnail-container">
                <Card.Img variant="top" src={project.image} className="thumbnail" />
                <div className="overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Website</a>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     </Container>

    </div>
  );
};

export default Portfolio;
