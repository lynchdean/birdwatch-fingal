import * as React from "react";
import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  text: string;
}

export default function DarkCard({ title, text }: Props) {
  return (
    <Card className="mt-4 mb-0" bg="dark" text="light">
      <Card.Header>
        <h5>{title}</h5>
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
