import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

export default function Sites() {
  return (
    <Container>
    <Card className="mt-4" bg="dark" text="light">
      <Card.Header><h5>Site Guides</h5></Card.Header>
      <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark">
              <a href="/Fingal-sites.pdf" className="text-light">Where to watch, North Fingal (Wings 2010)</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark">
              <a href="/Wings-Feb-2015-Broadmeadow.pdf" className="text-light">Broadmeadow Estuary (Wings Feb 2015)</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark">
              <a href="/Wings-feb2011-Fingal_hr.pdf" className="text-light">Fingal Site guide (Wings Feb 2011))</a>
            </ListGroup.Item>
      </ListGroup>
    </Card>
  </Container>
  );
}
