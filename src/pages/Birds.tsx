import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import data from "./data/terns"

export default function Birds() {
  return (
    <Container>
      <Card className="m-4" bg="dark" text="light">
        <Card.Header>
          <h5>Little Terns</h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-dark">
          <a
            href="https://drive.google.com/file/d/1IqCui6InL0wxkYlkzCWWflUpYHzV4eJY/view"
            className="btn btn-lg btn-info btn-block mb-3"
            role="button"
          >
            View Little Tern Warden Roster
          </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            {data.p1}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            {data.p2}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            {data.p3}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            {data.p4}
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            {data.p5}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}
