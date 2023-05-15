import React from "react";
import { Card, Container, ListGroup } from "react-bootstrap";
import data from "./data/terns";
import Tern1 from "../assets/tern1.jpg";
import Tern2 from "../assets/tern2.jpg";
import Tern3 from "../assets/tern3.jpg";
import Tern4 from "../assets/tern4.jpg";
import Tern5 from "../assets/tern5.jpg";
import Tern6 from "../assets/tern6.jpg";

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
              href="https://docs.google.com/spreadsheets/d/1A2BNZEkcOCirsFyDVrNU3NI3UqSrj5p8zziyeGpy3qg"
              className="btn btn-lg btn-info btn-block mb-3"
              role="button"
            >
              View Little Tern Warden Roster
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern1} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/littletern2022.pdf" className="btn btn-lg btn-info btn-block mb-3"
               role="button">
              Little Tern Report 2022 (PDF)
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/littletern2021.pdf" className="btn btn-lg btn-info btn-block mb-3">
              Little Tern Report 2021 (PDF)
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/littletern2020.pdf" className="btn btn-lg btn-info btn-block mb-3"
              role="button">
              Little Tern Report 2020 (PDF)
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <a href="/littletern2018.pdf" className="btn btn-lg btn-info btn-block mb-3">
            Little Tern Report 2018 (PDF)
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">{data.p1}</ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern2} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">{data.p2}</ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern3} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">{data.p3}</ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern4} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">{data.p4}</ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern5} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <img src={Tern6} alt="Logo" className="img-fluid" />
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">{data.p5}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}
