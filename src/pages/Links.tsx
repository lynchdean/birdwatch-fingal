import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import data from "./data/links";

export default function Links() {
  return (
    <Container>
      <Card className="mt-4" bg="dark" text="light">
        <ListGroup variant="flush">
          {data.links.map((link: any, index: number) => {
            return (
              <ListGroup.Item className="bg-dark" key={index}>
                <a href={link.uri} className="text-light ">
                  {link.title}
                </a>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </Container>
  );
}
