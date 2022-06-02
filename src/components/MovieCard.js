import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const MovieCard = ({ movie }) => {
  return (
    <Col xs={12} md={4} sm={6}>
      <Link to={`/description/${movie.id}`}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>
              <Rating rate={movie.rating} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;
