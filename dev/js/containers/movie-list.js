import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {selectMovie} from '../actions'


class MovieList extends Component {
    renderList() {
        return this.props.movies.map((movie) => {
          return (
            <li key={movie.id} onClick={()=> this.props.selectMovie(movie)}>{movie.movie_title}</li>
          )
        })
    }

    render() {
        return (
          <ul>{this.renderList()}</ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function matchDispatchToProps(dispatch) { //assign fungsi ke dalam property
  return bindActionCreators({
    selectMovie: selectMovie
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList)
