import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {selectMovie} from '../actions'

class MovieDetail extends Component {
  render() {
    console.log('props :', this.props);
    if (!this.props.movie_selected) {
      return (
        <div>
          <h2> Please Select Video </h2>
        </div>
      )
    } else {
      let src_video = "https://www.youtube.com/embed/"+this.props.movie_selected.movie_link
      return (
        <iframe  width="420" height="315" src={src_video} frameborder="0" allowFullScreen></iframe>
      )
    }
  }
}

function mapStateToProps(state) {
    return {
        movie_selected: state.movie_selected
    }
}

export default connect(mapStateToProps)(MovieDetail)
