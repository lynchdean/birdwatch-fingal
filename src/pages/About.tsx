import React from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

function About() {
  return (
    <Container className="py-4">
      <Card bg="dark" text="light">
        <Card.Body>
          <Card.Text>
            <p>
              The Fingal Branch is run by a small committee of dedicated
              volunteers who are passionate about the conservation of wild birds
              and their habitat in the Fingal area. The Branch formed in 1985
              when Rogerstown estuary came under treat of the development of a
              large landfill site.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" bg="dark" text="light">
        <Card.Header>
          <h5>Surveys:</h5>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-dark">
            <a href="#" className="text-light ">
              I-WeBS
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="#" className="text-light ">
              Countryside Bird Survey
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="#" className="text-light ">
              Garden Bird Survey
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="#" className="text-light ">
              Lapwing Breeding Survey - Rogerstown
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="#" className="text-light ">
              Little Tern Breeding Survey - Portrane
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="mt-4" bg="dark" text="light">
        <Card.Header>
          <h5>Events:</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              We host a series of indoor and outdoor events throughout the year.
              See our Events page for more details. These events are open to the
              public and free of charge with an option to make a small donation
              at the end. We regularly support joint events with organisations
              such Fingal County Council, local schools, tidy town groups and
              other societies, giving talks or walks.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" bg="dark" text="light">
        <Card.Header>
          <h5>Hides:</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              We maintain two hides at Rogerstown estuary. See our Rogerstown
              Hides page for more details.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" bg="dark" text="light">
        <Card.Header>
          <h5>Fundraising:</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>
              We rely on the support of the public to finance our activities,
              such as the maintenance of the hides at Rogerstown and running the
              Little Tern and Lapwing projects. Our main fundraiser is the
              annual General Knowledge Pub Quiz in January every year so your
              support is much welcomed.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
