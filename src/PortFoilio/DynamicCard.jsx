import React from 'react';
import { Card, Container,} from 'react-bootstrap';

const DynamicCard = ({ title, description, Passout }) => {
  return (
    <Container style={{display:"flex",justifyContent:"center"}}>
    <Card style={{width:"400px",  backgroundColor:'gray',}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
       <Card.Text>{Passout}</Card.Text>
        <p>{description}</p>
      </Card.Body>
    </Card>
    </Container>

  );
};

export default DynamicCard;
