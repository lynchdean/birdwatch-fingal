import React from "react";
import { Alert, Card, Container, ListGroup } from "react-bootstrap";
import SiteMap from "../assets/Hides-map.jpg";

function Hides() {
  return (
    <Container>
      <Alert className="my-4" variant="danger">
        <p>
          The observation hides at Turvey Park Rogerstown is closed until
          further notice.
        </p>
        <p>
          If you are planning a visit please check the table below to see if a
          warden has been assigned for that date. We rely on volunteers and it
          is not always possible to cover every Saturday and Sunday between
          September and March.
        </p>
        <p>
          To access the North Hide please contact Paul at bwifingal@gmail.com or
          0876319209.
        </p>
        <p>
          All talks and outings are also postponed. This step has been taken to
          help to ensure the safety of our visitors and our volunteers.
        </p>
      </Alert>

      <Card className="mb-4" bg="dark" text="light">
        <Card.Header>Site Map</Card.Header>
        <Card.Img variant="top" src={SiteMap} />
      </Card>

      <Card className="mb-4" bg="dark" text="light">
        <Card.Header>2020/21 Roster</Card.Header>
        <Card.Body>
          <Card.Text>
            <Alert variant="danger">
              Due to current COVID restrictions, there are currently no roster
              in place for January
            </Alert>

            <p>
              If you would like to volunteer for hide duty please contact Paul
              at bwifingal@gmail.com{" "}
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

      <Card className="mb-4" bg="dark" text="light">
        <Card.Header>Hide Information</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-dark">
            Due to the treat to its future many years ago Rogerstown estuary has
            become one of the Fingal branch's main focus for conservation.
            Thanks to the hard work of the branch an extension of the land fill
            further onto the inner estuary was stopped and in 1995 BWI purchased
            30 acres of wetland habitat (including the flooded field) and
            entered management agreements with sympathetic land owners for a
            further 15 acres. In 1998 thanks to the co-operation of Fingal
            County Council a hide was erected on the south shore of the estuary
            on council land. It is a large cargo container fitted with a timber
            interior and raised 2 meters off the ground. Its been a phenomenal
            success with hundreds of birders from near and far visiting
            annually. Again due to the commitment of the branch members the hide
            is now wardened every Saturday and Sunday from September through to
            March.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <p>Important:</p> Both the hide's are located very close to the main
            roosting sites for the birds of the estuary and visitors should
            attempt to get into position 1-2 hours before high tide (this is
            especially the case for the Northern Hide due to the exposed
            approach to the hide, roosting birds are easily disturbed). Visitors
            should also refrain from entering the flooded field to minimize
            disturbance to feeding and roosting birds. All other lands in the
            inner estuary area are privately owned and permission should always
            be sought from landowners before entering.
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            Rogerstown estuary is designated as a Special Area of Conservation
            and a Special Protection Area as it is an important waterfowl site,
            with Brent Goose having a population of international importance. A
            further 16 species have populations of national importance: Greylag
            Goose, Shelduck , Teal, Pintail, Shoveler, Oystercatcher, Ringed
            Plover, Golden Plover, Grey Plover, Lapwing, Knot, Dunlin,
            Sanderling, Black-tailed Godwit, Curlew, Redshank and Greenshank.
            The presence of a significant population of Golden Plover is of note
            and this species is listed on Annex I of the E.U. Birds Directive.
            The estuary is a regular staging post for autumn migrants,
            especially Green Sandpiper, Ruff, Little Stint, Curlew Sandpiper and
            Spotted Redshank. Little Tern has bred at the outer sand spit, but
            much of the nesting area has now been washed away as a result of
            erosion. The maximum number of pairs recorded was 17 in 1991. Ringed
            Plover breed in the same area. The outer part of the estuary has
            been designated a Statutory Nature Reserve and a Special Protection
            Area under the E.U. Birds Directive. The inner estuary has been
            damaged by the refuse tip which covers 40 ha of mudflat. This site
            is a good example of an estuarine system, with all typical habitats
            represented, including several listed on Annex I of the E.U.
            Habitats Directive. Rogerstown is an internationally important
            waterfowl site and has been a breeding site for Little Terns. The
            presence within the site of three rare plant species adds to its
            importance. Disturbing birds while roosting and feeding should be
            avoided. They can easily be viewed from the hides so do not approach
            on foot or on the water by canoe, kayak or other means. It is
            advisable not to enter the inner estuary on the water at any time
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark">
            <p>Viewing:</p>
            Rogerstown is ~18km from the city centre on the M1/N1. The nearest
            bus service is the #33 from Eden Quay to the N1/Turvey Avenue
            junction. Donabate has a train service from Connolly Station via
            Howth Junction & Malahide. Donabate village is ~3.5km from the hide.
            The outer estuary is quite accessible by public road at Raheen
            Point, Donabate and The Burrow, Portrane on the southern side and at
            Rogerstown and Baleally Lane on the northern side. The inner estuary
            can be accessed from two points. If approached from Balleally Road,
            cross the style at parking place (limited to 1 or 2 cars) and take
            the right-of-way down to the reserve. Visiting during spring tides
            is inadvisable as roosting birds may be disturbed and the visitor
            may be trapped on the reserve by the incoming tide. If approached
            from Turvey Avenue park at the Turvey Park car park and travel on
            foot to the main hide.
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default Hides;
