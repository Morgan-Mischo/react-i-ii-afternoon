import React, {Component } from 'react';
import logo from './logo.svg';
import data from './data'; 
import Header from './Components/Header'; 
import MainContent from './Components/MainContent'; 
import Style from './Components/Style.css'; 
import Reset from './Components/Reset.css'; 
import Footer from './Components/Footer'

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}
}

export default App;
