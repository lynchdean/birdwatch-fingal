import React from "react";
import {
  Alert,
  Button,
  Card,
  CardColumns,
  Col,
  Container,
  Jumbotron,
  Row,
} from "react-bootstrap";
import { Timeline } from "react-twitter-widgets";
import FingalLocation from "../assets/fingal-location.png";
import Rogerstown from "../assets/rogerstown.jpg";
import MemberLogo from "../assets/member-logo.png";
import "./css/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Jumbotron className="jumbo text-center p-0 pl-4">
        <Container className="inner-jumbo" />
      </Jumbotron>
      <Container>
        <Alert className="my-4" variant="danger">
          <p>
            <b>26/12/2020</b>
          </p>
          <p>
            The hide in Turvey park Rogerstown is CLOSED until further notice.
          </p>
          <p>
            If you are planning to visit please check{" "}
            <Link to="/hides">Rogerstown Hides </Link>
            to see if a warden has been assigned for that date. We rely on
            volunteers and it is not always possible to cover every Saturday and
            Sunday between September and March.
          </p>
          <p>
            All talks and outings are postponed until further notice. This step
            has been taken to help to ensure the safety of our visitors and our
            volunteers.
          </p>
        </Alert>

        {/* Main Content */}
        <Welcome />
        <CardColumns>
          <BecomeMember />
          <WetlandsExperiment />
          <TwitterFeed />
        </CardColumns>
      </Container>
    </div>
  );
}

function Welcome() {
  return (
    <Card className="mb-4" bg="dark" text="light">
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Text>
              <p>
                Welcome to the Fingal branch of Birdwatch Ireland. Fingal is
                situated in North Co. Dublin and can boast of great birding
                spots for the beginner and experienced birder alike. Fingal
                extends from the outer limits of Dublin city to Meath in the
                North and to the West.
              </p>
              <p>
                Due to its location on the east coast there is a good variety of
                coastal habitat to be found including beaches, cliffs, islands
                and estuaries as well as agricultural land, woodland etc..
                Rockabill Island off the coast from Skerries holds one of
                Europe's largest breeding colonies of Rosate Terns while during
                the winter months Rogerstown Estuary holds internationally
                important numbers of Pale-bellied Brent Geese, along with a
                further 10 species of wintering waterfowl in nationally
                important numbers, including Wigeon and Black-tailed Godwit.
              </p>
            </Card.Text>
            <Card.Link className="align-self-end">
              <Button variant="info" size="sm" block>
                For questions contact bwifingal@gmail.com
              </Button>
            </Card.Link>
          </Col>
          <Col md={4}>
            <Card.Img variant="bottom" src={FingalLocation} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

function BecomeMember() {
  return (
    <Card bg="dark" text="light">
      <Card.Body>
        <Card.Text>
          <p>
            As a voluntary organisation, the financial support we receive from
            our members is vital if we are to be able to continue our bird and
            habitat conservation work, keep working with schools and teachers
            and create and manage nature reserves. By becoming a member today,
            you can help us in our work and make a real difference to wildlife
            in Ireland For more details and an application form visit
          </p>
        </Card.Text>
        <Card.Link href="https://birdwatchireland.ie/get-involved/join-us-become-a-member/">
          <Button variant="light" block>
            <Card.Img className="p-4" variant="bottom" src={MemberLogo} />
            <Button className="mt-2 mb-3" variant="info" size="sm">
              Become a member of BirdWatch Ireland
            </Button>
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

function WetlandsExperiment() {
  return (
    <Card bg="dark" text="light">
      <Card.Img variant="top" src={Rogerstown} />
      <Card.Body>
        <Card.Title>Let it flood: an Irish wetland experiment</Card.Title>
        <Card.Text>
          A remarkable ecological initiative is under way in Rogerstown Estuary,
          just north of Dublin
        </Card.Text>
        <Card.Link href="http://www.irishtimes.com/news/environment/let-it-flood-an-irish-wetland-experiment-1.2435139">
          <Button variant="info" block>
            Irish Times article
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

function TwitterFeed() {
  return (
    <Card bg="dark" text="light">
      <Card.Body>
        <Card.Title>
          Twitter
          <div className="float-right">
            <a
              href="https:/\/twitter.com/bwifingal?ref_src=twsrc%5Etfw"
              className=" text-rigth twitter-follow-button"
              data-show-count="false"
            >
              Follow @bwifingal
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </div>
        </Card.Title>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "BWIFingal",
          }}
          options={{
            height: 510,
            theme: "dark",
          }}
        />
      </Card.Body>
    </Card>
  );
}
