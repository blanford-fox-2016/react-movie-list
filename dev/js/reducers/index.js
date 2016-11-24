import {combineReducers} from 'redux'
import movieReducers from './reducer-movie-lists'
import movieSelectReducer from './reducer-movie-select'

const allReducer = combineReducers({
  movies: movieReducers,
  movie_selected: movieSelectReducer
})

export default allReducer
