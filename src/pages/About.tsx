import React from "react";
import { Card, CardColumns, Container, ListGroup } from "react-bootstrap";
import DarkCard from "../components/DarkCard";
import data from "./data/about";

export default function About() {
  return (
    <Container className="py-4 mh-100">
      <Info />
      <CardColumns>
        <Surveys />
        <InfoCards />
      </CardColumns>
    </Container>
  );
}

function Info() {
  return (
    <Card bg="dark" text="light">
      <Card.Body>
        <Card.Text>
          <p>{data.blurb}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Surveys() {
  return (
    <Card className="mt-4" bg="dark" text="light">
      <Card.Header>
        <h5>Surveys:</h5>
      </Card.Header>
      <ListGroup variant="flush">
        {data.links.map((link: any, index: number) => {
          return (
            <ListGroup.Item className="bg-dark">
              <a href={link.uri} className="text-light ">
                {link.title}
              </a>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );
}

function InfoCards() {
  return (
    <div>
      {data.cards.map((card: any, index: number) => {
        return <DarkCard key={index} title={card.heading} text={card.text} />;
      })}
    </div>
  );
}
