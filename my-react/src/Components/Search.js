import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      value: ''
    }
    this.nameRef = React.createRef()
  }

  handleSearch=(e)=>{
    this.setState({value: e.target.value})
    
  }
  componentDidMount=()=> {
    this.nameRef.current.focus()
  }
  handleClick=()=>{
    this.props.searchMovie(this.state.value)  
  }
  key=(e)=>{
    if(e.key=='Enter') {
      this.props.searchMovie(this.state.value)
    }
  }

    render() {
      const {searchMovie} = this.props
        return (
            <>  

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
   
          <div className="ins">
          <input className="form-control me-2" type="search" placeholder="Search" onKeyDown={this.key} onChange={this.handleSearch} ref={this.nameRef} />
      <button className="btn btn-outline-success" type="button" onClick={this.handleClick}>Search</button>
    
          </div>
      
  </div>
</nav>
{/* <div className="input-group">
            <div className="form-outline">
              <input id="search-focus" onKeyDown={this.key} onChange={this.handleSearch} ref={this.nameRef} type="search" className="form-control" />
              <label className="form-label" for="form1">Search</label>
            </div>
            <button type="button" onClick={this.handleClick} className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div> */}

</>
        );
    }
}

export default Search;