import axios from "axios";
import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchSuperHeroes = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/friends`);
};

export default function ParallelQueries() {
  const {
    data: heroesData,
    isLoading: isLoadingHeroes,
    isError: isErrorHeroes,
    error: errorHeroes,
  } = useQuery("fetch-heroes", fetchSuperHeroes);
  const {
    data: friendsData,
    isLoading: isLoadingFriends,
    isError: isErrorFriends,
    error: errorFriends,
  } = useQuery("fetch-friends", fetchFriends);

  if (isLoadingHeroes || isLoadingFriends) {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-auto pt-3">
            Superheroes Or Friends Loading ...
          </Col>
        </Row>
      </Container>
    );
  }
  if (isErrorHeroes || isErrorFriends) {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-auto pt-3">
            {errorHeroes?.message} {errorFriends?.message}
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
            {heroesData?.data.length > 0 &&
              heroesData?.data.map((hero) => {
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
        <Col sm={12} md={6} className="m-auto pt-3">
          <ListGroup>
            {friendsData?.data.length > 0 &&
              friendsData?.data.map((friend) => {
                return (
                  <ListGroup.Item
                    className="text-center text-success"
                    key={friend.id}
                  >
                    <Link
                      className="text-center text-success"
                      to={`/rq-friends/${friend.id}`}
                    >
                      {friend.name}
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
