import React, { Component } from 'react';
import Main from './Components/Main';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
    );
  }
}

export default App;