import React from "react";
import { Card, Container, Table, Image, Row, Col } from "react-bootstrap";
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

          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Hide Tide Time & Height</th>
                <th>Meeting Time</th>
                <th>Count Start Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sept 5th</td>
                <td>14.24. 3.8mtrs.</td>
                <td>13:00</td>
                <td>13:30</td>
              </tr>
              <tr>
                <td>Oct 3rd</td>
                <td>13.22. 3.9mtrs.</td>
                <td>11:30</td>
                <td>12:00</td>
              </tr>
              <tr>
                <td>Nov 7th</td>
                <td>15.33. 3.5mtrs.</td>
                <td>14:00</td>
                <td>14:30</td>
              </tr>
              <tr>
                <td>Dec 5th</td>
                <td>14.29. 3.8mtrs.</td>
                <td>13:00</td>
                <td>13:30</td>
              </tr>
              <tr>
                <td>Jan 16th</td>
                <td>13.42. 4.1 mtrs.</td>
                <td>12:00</td>
                <td>12:30</td>
              </tr>
              <tr>
                <td>Feb 13th</td>
                <td>12.42. 4.2 mtrs.</td>
                <td>11:00</td>
                <td>11:30</td>
              </tr>
              <tr>
                <td>Mar 13th</td>
                <td>15.08. 4.1 mtrs</td>
                <td>10:00</td>
                <td>10:30</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-center mb-2">
            <b>Meet at Turvey Nature Park car park on Turvey Avenue</b>
          </div>
          <p>Would you like to get involved?</p>
          <p>
            If you would like to get involved or if you have any queries, please
            contact Helen at the I-WeBS Office or simply turn up on the day.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default IWebs;
