import React, { Component } from 'react';
import MovieItems from './MovieItems';

class MovieList extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
     
        const {data,imdbID} = this.props
        
        return (

               <div className="div">
                <div className="cards">

                         {

                    data.map(item => (
                        <MovieItems key={item.imdbID} {...item}/>
                    ))
                }

{/* <h1>Sorry! Movie not found.</h1> */}
               </div>
               </div>
        );
    }
}

export default MovieList;