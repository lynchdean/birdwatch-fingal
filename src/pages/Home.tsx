import React from "react";
import { Card, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Jumbotron className="mt-4">
        <h1>BWI Fingal</h1>
      </Jumbotron>
      <Card>
        <div className="row card-body">
          <div className="col-sm-8 p-4">
            <p>
              Welcome to the Fingal branch of Birdwatch Ireland. Fingal is
              situated in North Co. Dublin and can boast of great birding spots
              for the beginner and experienced birder alike. Fingal extends from
              the outer limits of Dublin city to Meath in the North and to the
              West.
            </p>
            <p>
              Due to its location on the east coast there is a good variety of
              coastal habitat to be found including beaches, cliffs, islands and
              estuaries as well as agricultural land, woodland etc.. Rockabill
              Island off the coast from Skerries holds one of Europe's largest
              breeding colonies of Rosate Terns while during the winter months
              Rogerstown Estuary holds internationally important numbers of
              Pale-bellied Brent Geese, along with a further 10 species of
              wintering waterfowl in nationally important numbers, including
              Wigeon and Black-tailed Godwit.
            </p>
            <p>For questions contact bwifingal@gmail.com</p>
          </div>
          <img
            className="col-sm-4"
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/Island_of_Ireland_location_map_Fingal.svg"
            alt="Fingal Location"
          />
        </div>
      </Card>
    </div>
  );
}

export default Home;
