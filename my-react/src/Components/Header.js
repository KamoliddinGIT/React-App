import React, { Component } from 'react';
import img from './images/film.png'

class Header extends Component {
    render() {
        return (
            
                <nav>
    <div className="nav-wrapper">
 <a href="https://www.omdbapi.com/"><img className='brand-logo' src={img} alt=""  id='img'/></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html" className='li'>Directors</a></li>
        <li><a href="badges.html" className='li'>Producers</a></li>
        <li><a href="collapsible.html" className='li'>Documentation</a></li>
      </ul>
    </div>
  </nav>
        );
    }
}

export default Header;