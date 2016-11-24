import React from 'react'
import MovieList from '../containers/movie-list'
import MovieDetail from '../containers/movie-detail'


  function App() {
    return (
      <div>
        <h2>Movie List</h2>
        <MovieList />
        <hr />
        <MovieDetail />
        <hr />
      </div>
    )
  }


export default App
