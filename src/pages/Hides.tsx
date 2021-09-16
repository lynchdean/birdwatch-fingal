import React from "react";
import { Alert, Card, CardColumns, Container } from "react-bootstrap";
import SiteMap from "../assets/Hides-map.jpg";
import DarkCard from "../components/DarkCard";
import data from "./data/hides";

function Hides() {
  return (
    <Container>
      <Alert className="my-4 text-center" variant="info">
        <h5 className="alert-heading">
          The observation hides at Turvey Park Rogerstown are now back open!
        </h5>
      </Alert>

      <Card bg="dark" text="light">
        <Card.Header>2020/21 Roster</Card.Header>
        <Card.Body>
          <Card.Text>
            <a
              href="https://docs.google.com/spreadsheets/d/18I5U3M8or1o3oYTaWid3dGJd_8Pd8cNJU685vX0MD0E/edit#gid=0"
              className="btn btn-lg btn-info btn-block mb-2"
              role="button"
            >
              View Roster
            </a>
            <p>
              If you would like to volunteer for hide duty please contact Paul
              at <a href="mailto:bwifingal@gmail.com">bwifingal@gmail.com</a>
            </p>
            <p>The responsibilities of the person on hide duty include:</p>
            <ul>
              <li>
                Opening hours range between 10.00 am and 4.00 pm. You can leave
                the hide during that interval but you should try and make
                yourself available to the public for much of this period. If you
                do leave during this interval, close a few of the hatches and
                make sure the hide is accessible.
              </li>
              <li>Encourage all visitors to sign Visitors Book</li>
              <li>
                Record any rarities or large numbers of species in Log Book
              </li>
              <li>
                Keep an eye out for any unauthorised activities such as
                shooting/dumping etc.
              </li>
              <li>
                Make sure all hatches/doors are closed and secured when you
                finish your duty.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" bg="dark" text="light">
        <Card.Header>Site Map</Card.Header>
        <Card.Img variant="top" src={SiteMap} alt="Rogerstown Hides Map" />
      </Card>

      <CardColumns className="mt-0 mb-4">
        <InfoCards />
      </CardColumns>
    </Container>
  );
}

function InfoCards() {
  return (
    <div>
      {data.cards.map((card: any, index: number) => {
        return <DarkCard key={index} title={card.title} text={card.text} />;
      })}
    </div>
  );
}

export default Hides;
