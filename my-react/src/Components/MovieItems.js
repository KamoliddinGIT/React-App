import React, { Component } from 'react';

class MovieItems extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {Poster, Title, Year} = this.props
        return (
       
              <div className="card">
              <div className="card-image">
              <img src={Poster}/>
              </div>
              <span className="card-title">{Title}</span>
              <div className="card-action">
              <a href="#">{Year}</a>
              </div>
              </div>
        
        )
    }
}

export default MovieItems;