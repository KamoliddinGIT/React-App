import React, { Component } from 'react';
import MovieList from './MovieList';
import Loader from './Loader';
import Search from './Search';


class Main extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            res: ''
           
        }
    }
    componentDidMount=()=>{
        fetch(`https://www.omdbapi.com/?s=Thor&apikey=77513067`) 
        .then(res=> res.json())
        .then(base=> {
            base.Response == 'True' ? this.setState({data: base.Search, res: base.Response}):this.setState({res: base.Response})
        })
    }
    searchMovie=(url)=>{
        this.setState({data: []})
        fetch(`https://www.omdbapi.com/?s=${url}&apikey=77513067`) 
        .then(res=> res.json())
        .then(base=>  base.Response == 'True' ? this.setState({data: base.Search, res: base.Response}):this.setState( {data: [], res: base.Response}))
        
    }
    render() {
      
        return (
            
            <div className='main'>
            <Search searchMovie={this.searchMovie}/>
            {!this.state.data.length ? <Loader res={this.state.res}/> : <MovieList data={this.state.data} res={this.state.res}/>}           
            </div>
        );
    }
}

export default Main;