import React from "react";
import { Card, Container, Image, Row, Col } from "react-bootstrap";
import IWebsLogo from "../assets/iwebs.jpg";

function IWebs() {
  return (
    <Container>
      <Card className="my-4" bg="dark" text="light">
        <Card.Header>I-Webs</Card.Header>
        <Card.Body>
          <Row>
            <Col md={9}>
              <p>
                <b>Ireland Wetland Bird Survey (I-Webs)</b> counts of Rogerstown
                Estuary The birds of Fingal's estuaries and coast line are
                counted once a month between September and March as part of
                I-WeBS. The counts have to be coordinated to provide accurate
                numbers as birds frequently move from one area to another. For
                Rogerstown a team of counters meet up and are given a section of
                the estuary to count. The numbers and then correlated and passed
                onto the I-WeBS office. The results are published annually and
                are used to track population trends over time.
              </p>
            </Col>
            <Col md={3}>
              <Image
                className="mb-4 mx-auto d-block"
                src={IWebsLogo}
                rounded
                height="140"
              />
            </Col>
          </Row>

          <a
            href="https://docs.google.com/spreadsheets/d/1Y9me-h63ZsqC6ITFmZcI23To04Zgfo98b1q4Sz4wihI/edit#gid=0"
            className="btn btn-lg btn-info btn-block mb-3"
            role="button"
          >
            View Scedule
          </a>

          <div className="text-center mb-2">
            <b>Meet at Turvey Nature Park car park on Turvey Avenue</b>
          </div>
          <p>Would you like to get involved?</p>
          <p>
            If you would like to get involved or if you have any queries, please
            contact Paul at bwifingal@gmail.com or simply turn up on the day.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default IWebs;
