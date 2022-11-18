import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
export default function Superheroes() {
  const [heroes, setHereoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}/superheroes`,
    }).then(function (response) {
      setIsLoading(false);
      setHereoes(response?.data);
    });
  }, []);
  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-auto pt-3">
            Superheroes Loading ...
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} className="m-auto pt-3">
          <ListGroup>
            {heroes.length > 0 &&
              heroes.map((hero) => {
                return (
                  <ListGroup.Item
                    className="text-center text-danger"
                    key={hero.id}
                  >
                    {hero.name}
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
