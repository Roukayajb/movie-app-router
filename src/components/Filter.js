import React from 'react'
import MovieList from './MovieList'
function Filter({movies,search}) {
  return (
    <MovieList
        movies={movies.filter(
          (m) =>
            m.title.search(new RegExp(search.search, "gi")) !== -1 &&
            m.rating >= search.rate
        )}
      />
  )
}

export default Filter