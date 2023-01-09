import React, { Component } from 'react';

class Footer extends Component {
    render() {
      const name = 'powered by Kamoliddin Bakhtiyorov'
        return (
            <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="http://t.me/bektoshevich_01">{name}</a>
            </div>
          </div>
        </footer>
            
        );
    }
}

export default Footer;