import React from 'react'
import MovieCard from './MovieCard'
import { Container,Row } from 'react-bootstrap'
const MovieList = ({movies}) => {
  return (
    <Container>
      <Row>
        { movies.map((m, idx) => (
            <MovieCard movie={m} key={idx}/>
        ))}

      </Row>
    </Container>
  )
  
}
export default MovieList