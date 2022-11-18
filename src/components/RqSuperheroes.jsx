import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hook/useSuperHeroesData";

const onSuccess = ({ data }) => {
  // do something with fetched data
};
const onError = (error) => {
  // do something with fetched data error
};

export default function RqSuperheroes() {
  const { isLoading, isError, error, data, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
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
            {data?.data.length > 0 &&
              data?.data.map((hero) => {
                return (
                  <ListGroup.Item
                    className="text-center text-success"
                    key={hero.id}
                  >
                    <Link
                      className="text-center text-success"
                      to={`/rq-superheroes/${hero.id}`}
                    >
                      {hero.name}
                    </Link>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
