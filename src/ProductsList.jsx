import React from 'react';
import { Container, Row, Col, Card, ButtonGroup, ToggleButton } from 'react-bootstrap';
import {  Link } from 'react-router-dom';

  const ProductsList = ({ products, view, setView }) => {
  return (
    <Container>
      <div className="my-4">
        <ButtonGroup toggle>
          <ToggleButton
            type="radio"
            variant="outline-primary"
            name="view"
            value="grid"
            checked={view === 'grid'}
            onChange={() => setView('grid')}
          >
            Grid View
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="outline-primary"
            name="view"
            value="list"
            checked={view === 'list'}
            onChange={() => setView('list')}
          >
            List View
          </ToggleButton>
        </ButtonGroup>
      </div>
      <Row xs={1} md={view === 'grid' ? 2 : 1} lg={view === 'grid' ? 4 : 1} className="g-4">
        {products?.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.photo} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
 export default ProductsList
