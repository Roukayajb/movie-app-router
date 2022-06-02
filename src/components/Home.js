import React from "react";
import Filter from "./Filter";
import AddModal from "./AddModal";
import { Button, Container } from "react-bootstrap";
function Home({ handleClose, addHandle, movies, search, show }) {
  return (
    <div>
      <Container className="re">
        <Button className="btn" variant="primary" onClick={handleClose}>
           New Movie
        </Button>
      </Container>
      <Filter movies={movies} search={search} />
      <AddModal handleClose={handleClose} show={show} addHandle={addHandle} />
    </div>
  );
}

export default Home;
