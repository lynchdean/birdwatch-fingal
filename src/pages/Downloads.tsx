import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

export default function Sites() {
  return (
    <Container>
      <Card className="mt-4" bg="dark" text="light">
        <Card.Header><h5>Downloads</h5></Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-dark">
            <a href="/Ballast Pit wild bird and biodiversity survey June 2022.pdf" className="text-light">Ballast Pit wild bird and biodiversity survey June 2022</a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/Kenure Woods Bird Survey 2021.pdf" className="text-light">Kenure Woods Bird Survey 2021</a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/Mill Stream wild bird and biodiversity survey.pdf" className="text-light">Mill Stream wild bird and biodiversity survey</a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/Red Island-South Strand wild bird and biodiversity survey.pdf" className="text-light">Red Island-South Strand wild bird and biodiversity survey</a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/Rivervalley Park Survey May 2020.pdf" className="text-light">Rivervalley Park Survey May 2020</a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/St Catherine Bird Survey 2021.pdf" className="text-light">St Catherine Bird Survey 2021.pdf</a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}
