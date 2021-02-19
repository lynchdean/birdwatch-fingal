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
          <p>
            The Fingal Branch is run by a small committee of dedicated
            volunteers who are passionate about the conservation of wild birds
            and their habitat in the Fingal area. The Branch formed in 1985 when
            Rogerstown estuary came under treat of the development of a large
            landfill site.
          </p>
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
        <ListGroup.Item className="bg-dark">
          <a href="http://www.bwifingal.ie/i-webs/" className="text-light ">
            I-WeBS
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark">
          <a
            href="https://birdwatchireland.ie/our-work/surveys-research/research-surveys/countryside-bird-survey/"
            className="text-light "
          >
            Countryside Bird Survey
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark">
          <a
            href="https://birdwatchireland.ie/our-work/surveys-research/research-surveys/irish-garden-bird-survey/"
            className="text-light "
          >
            Garden Bird Survey
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark">
          {/* <a href="#" className="text-light "> */}
          Lapwing Breeding Survey - Rogerstown
          {/* </a> */}
        </ListGroup.Item>
        <ListGroup.Item className="bg-dark">
          <a
            href="http://www.bwifingal.ie/birds/little-tern/"
            className="text-light "
          >
            Little Tern Breeding Survey - Portrane
          </a>
        </ListGroup.Item>
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
